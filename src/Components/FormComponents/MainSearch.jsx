import './MainSearch.css';
import { useState, useEffect, useCallback } from 'react';
import {
    Autocomplete,
    TextField,
    CircularProgress,
    Box,
    Typography,
    Grid,
    Chip,
    Button,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import LaunchIcon from '@mui/icons-material/Launch';
import {
    apiURL,
    autocompleteURL,
    topTrendingWordsURL,
    suggestionsURL
} from '../../Helpers/helpers';

export default function MainSearch({ onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [mostSearchedWords, setMostSearchedWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(null);

    const handleSuggestionClick = s => {
        if (onSelect) onSelect(s);
    };

    useEffect(() => {
        const fetchTopSearches = async () => {
            try {
                setLoading(true);
                const result = await axios.get(`${apiURL}${topTrendingWordsURL}`);
                console.log('result---', result);
                setMostSearchedWords(result.data || []);
            } catch {
                setMostSearchedWords([]);
            } finally {
                setLoading(false);
            }
        };
        fetchTopSearches();
    }, []);

    useEffect(() => {
        if (inputValue.length < 2) {
            setOptions([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(async () => {
            try {
                const url = `${apiURL}${autocompleteURL}`;
                const { data } = await axios.get(url, {
                    params: { prefix: inputValue, max: 5 }
                });
                setOptions(data);
                if (!data.length) {
                    const url2 = `${apiURL}${suggestionsURL}`;
                    const { data: sugg } = await axios.get(url2, {
                        params: { word: inputValue, max: 3 }
                    });
                    setSuggestions(sugg || []);
                }
            } catch {
                setOptions([]);
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        }, 500);

        return () => clearTimeout(timer);
    }, [inputValue]);

    const getNoOptionsText = useCallback(() => {
        if (inputValue.length < 2) {
            return 'Type at least 2 characters';
        }
        else if (!options.length && !suggestions.length) {
            return 'No such word exists in dictionary';
        }
        else {
            return 'No options found'
        }

    }, [inputValue, options, suggestions]);



    const isDoYouMean = inputValue?.length > 2 && !options.length && suggestions.length > 0;
    const showMostSearchedWords = !isDoYouMean && mostSearchedWords.length > 0;
    const disableSearch = inputValue.length >= 2 && (loading || !options.length);
    const noOptionsText = getNoOptionsText();

    // handle form submission (Search button or Enter key)
    const handleSubmit = e => {
        e.preventDefault();
        if (inputValue.length >= 2) {
            onSelect?.(inputValue);
        }
    };

    return (
        <>
            {/* Row 1: full‑width search bar with attached button */}
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
                        onChange={(_, newVal, reason, details) => {
                            setValue(newVal);
                            if (reason === 'selectOption') {
                                onSelect?.(newVal);
                            }
                            console.log('details---', details);
                        }}
                        inputValue={inputValue}
                        onInputChange={(_, v, reason) => reason === 'input' && setInputValue(v)}
                        // getOptionLabel={(opt) => opt.label}
                        // renderOption={(props, option) => (
                        //     <Box
                        //         component="li"
                        //         {...props}
                        //         sx={{
                        //             display: 'flex',
                        //             justifyContent: 'space-between',
                        //             pr: 2, pl: 1,
                        //         }}
                        //     >
                        //         <Typography noWrap>{option.label}</Typography>
                        //         <Typography variant="body2" color="text.secondary" noWrap>
                        //             {option.info}
                        //         </Typography>
                        //     </Box>
                        // )}

                        options={options}
                        loading={loading}
                        loadingText="Loading…"
                        noOptionsText={noOptionsText}
                        popupIcon={null}
                        openOnFocus
                        sx={{
                            flexGrow: 1,
                            '& .MuiOutlinedInput-root': {
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                paddingRight: '1rem !important',
                            }
                        }}
                        renderInput={params => (
                            <TextField
                                {...params}
                                label="looking for..."
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <>
                                            {loading && <CircularProgress size={20} />}
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        </>
                                    )
                                }}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        disableElevation
                        disabled={disableSearch}
                        sx={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            height: '56px',
                            px: 3
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Grid>

            {/* ... Rows 2 and 3 unchanged ... */}
            {showMostSearchedWords && (
                <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 5 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            minHeight: '2rem'
                        }}
                    >
                        <Typography variant="subtitle1" component="span" sx={{ mr: 3, mb: 1 }}>
                            <Chip
                                icon={<TrendingUpIcon />}
                                className="custom-chip"
                                label="Most searched words"
                            />
                        </Typography>
                        {mostSearchedWords.map(word => (
                            <Chip
                                key={word.keyword}
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

            {isDoYouMean && (
                <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 6 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            minHeight: '2rem'
                        }}
                    >
                        <Typography variant="subtitle1" component="span" sx={{ mr: 3 }}>
                            <Chip
                                icon={<TroubleshootIcon />}
                                className="custom-chip-red-icon"
                                label="Did you mean"
                            />
                        </Typography>
                        {suggestions.map(s => (
                            <Chip
                                key={s}
                                label={s}
                                size="small"
                                className="suggestions-chip"
                                color="primary"
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
