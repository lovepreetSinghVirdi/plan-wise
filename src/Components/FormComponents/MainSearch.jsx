import './MainSearch.css';
import { useState, useEffect, useCallback } from 'react';
import {
    Autocomplete,
    TextField,
    CircularProgress,
    Box,
    Grid,
    Chip,
    Button,
    InputAdornment,
    Tooltip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import LaunchIcon from '@mui/icons-material/Launch';
import axios from 'axios';

import {
    apiURL,
    autocompleteURL,
    topTrendingWordsURL,
    suggestionsURL,
    searchPlanByTextUrl,
    frequencyCountURL
} from '../../Helpers/helpers';
import AlertMsg from './AlertMsg';

const NoSuchWord = 'No such word exists in dictionary';

export default function MainSearch({ onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [mostSearchedWords, setMostSearchedWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const [alert, setAlert] = useState({ open: false, severity: 'success', title: '', message: '' });

    const showAlert = useCallback((sev, freq = null) => {
        let title = '';
        if (sev === 'success') {
            title = 'Success!';
        } else if (sev === 'error') {
            title = 'Error!';
        } else {
            title = 'Oops!';
        }

        setAlert({
            open: true,
            severity: sev,
            title,
            message: sev === 'success'
                ? 'Response submitted successfully.'
                : (
                    <>
                        <div>{NoSuchWord}</div>
                        <div>Search Frequency: {freq}</div>
                    </>
                ),
        });
    }, [setAlert]);

    const fetchPageData = useCallback(async (keyword) => {
        try {
            // First, trigger the search API
            const url = `${apiURL}${searchPlanByTextUrl}`;
            await axios.get(url, { params: { q: keyword, max: 50 } });

            // Then fetch the search frequency
            const frequencyURL = `${apiURL}${frequencyCountURL}`;
            const { data: { frequency } } = await axios.get(frequencyURL, { params: { keyword } });

            // Show an informational alert with the real frequency count
            showAlert('info', frequency);
        } catch {
            // On any error, show the error alert (without frequency)
            showAlert('error');
        }
    }, [showAlert]);

    const handleSuggestionClick = useCallback((s) => {
        if (!options.length) {
            fetchPageData(s);
            return;
        }
        if (onSelect) onSelect(s);
    }, [fetchPageData, onSelect, options]);

    // Fetch top trending on mount
    useEffect(() => {
        const fetchTopSearches = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`${apiURL}${topTrendingWordsURL}`);
                setMostSearchedWords(data || []);
            } catch {
                setMostSearchedWords([]);
            } finally {
                setLoading(false);
            }
        };
        fetchTopSearches();
    }, []);

    // Fetch autocomplete + suggestions
    useEffect(() => {
        if (inputValue.length < 2) {
            setOptions([]);
            setSuggestions([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(async () => {
            try {
                const { data: ac } = await axios.get(`${apiURL}${autocompleteURL}`, {
                    params: { prefix: inputValue, max: 10 },
                });
                setOptions(ac.map(option => ({
                    label: option.word,
                    occurrences: option.wordFrequency,
                    searchCount: option.searchFrequency,
                })));

                if (!ac.length) {
                    const { data: sugg } = await axios.get(`${apiURL}${suggestionsURL}`, {
                        params: { word: inputValue, max: 3 },
                    });
                    setSuggestions(sugg || []);
                } else {
                    setSuggestions([]);
                }
            } catch {
                setOptions([]);
                setSuggestions([]);
                showAlert('error');
            } finally {
                setLoading(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, showAlert]);

    const getNoOptionsText = useCallback(() => {
        if (inputValue.length < 2) return 'Type at least 2 characters';
        if (!options.length && !suggestions.length) return NoSuchWord;
        return 'No options found';
    }, [inputValue, options, suggestions]);

    const isDidYouMean = inputValue.length > 2 && !options.length && suggestions.length > 0;
    const showMostSearchedWords = !isDidYouMean && mostSearchedWords.length > 0;
    const noOptionsText = getNoOptionsText();

    // Submit handler
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.length >= 2) handleSuggestionClick(inputValue);
    };

    return (
        <>
            <AlertMsg
                open={alert.open}
                severity={alert.severity}
                title={alert.title}
                onClose={() => setAlert(a => ({ ...a, open: false }))}
            >
                {alert.message}
            </AlertMsg>

            {/* Search bar */}
            <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ display: 'flex', alignItems: 'stretch', width: '100%' }}
                >
                    <Autocomplete
                        freeSolo={false}
                        autoComplete
                        autoHighlight
                        filterOptions={x => x}
                        value={value}
                        onChange={(_, newVal, reason) => {
                            setValue(newVal);
                            if (reason === 'selectOption') handleSuggestionClick(newVal.label);
                        }}
                        inputValue={inputValue}
                        onInputChange={(_, v, reason) => reason === 'input' && setInputValue(v)}
                        options={options}
                        getOptionLabel={opt => opt.label}
                        renderOption={(props, opt, other) => {
                            const parsedProps = { ...props };
                            delete parsedProps.key;
                            return (
                                <li
                                    {...parsedProps}
                                    key={`option_${opt.label}_${other.index}`}
                                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 8px' }}
                                >
                                    <Box component="span" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                        {opt.label}
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, ml: 2 }}>
                                        <Tooltip title="Number of times searched" arrow>
                                            <Chip
                                                size="small"
                                                icon={<SearchIcon fontSize="small" />}
                                                label={opt.searchCount}
                                                sx={{ '& .MuiChip-icon': { color: '#1E88E5' }, width: '4rem' }}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Total occurrences in database" arrow>
                                            <Chip
                                                size="small"
                                                icon={<BarChartIcon fontSize="small" />}
                                                label={opt.occurrences}
                                                sx={{ '& .MuiChip-icon': { color: '#43A047' }, width: '4rem' }}
                                            />
                                        </Tooltip>
                                    </Box>
                                </li>
                            );
                        }}
                        loading={loading}
                        loadingText="Loading…"
                        noOptionsText={noOptionsText}
                        popupIcon={null}
                        openOnFocus
                        sx={{ flexGrow: 1, '& .MuiOutlinedInput-root': { borderTopRightRadius: 0, borderBottomRightRadius: 0, paddingRight: '1rem !important' } }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="looking for..."
                                fullWidth
                                slotProps={{
                                    input: {
                                        ...params.InputProps,
                                        endAdornment: (
                                            <>
                                                {loading && <CircularProgress size={20} />}
                                                <InputAdornment position="end">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            </>
                                        ),
                                    },
                                }}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                        sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: '56px', px: 3 }}
                    >
                        Search
                    </Button>
                </Box>
            </Grid>

            {/* Top trending words */}
            {showMostSearchedWords && (
                <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 5 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Chip icon={<TrendingUpIcon />} label="Most searched words" className="custom-chip" sx={{ mb: 1 }} />
                        {mostSearchedWords.map((word, index) => (
                            <Chip
                                key={`most_searched_${word.keyword}_${index}`}
                                label={word.keyword}
                                size="small"
                                color="primary"
                                className="suggestions-chip"
                                onClick={() => handleSuggestionClick(word.keyword)}
                                sx={{ ml: 1, mb: 1 }}
                                deleteIcon={<LaunchIcon />}
                                onDelete={() => handleSuggestionClick(word.keyword)}
                            />
                        ))}
                    </Box>
                </Grid>
            )}

            {/* "Did you mean" suggestions */}
            {isDidYouMean && (
                <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 5 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Chip icon={<TroubleshootIcon />} label="Did you mean" className="custom-chip-red-icon" />
                        {suggestions.map((s, index) => (
                            <Chip
                                key={`suggestion_${s}_${index}`}
                                label={s}
                                size="small"
                                color="primary"
                                className="suggestions-chip"
                                onClick={() => handleSuggestionClick(s)}
                                sx={{ ml: 1 }}
                                deleteIcon={<LaunchIcon />}
                                onDelete={() => handleSuggestionClick(s)}
                            />
                        ))}
                    </Box>
                </Grid>
            )}
        </>
    );
}
