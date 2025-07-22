import './MainSearch.css';
import React, { useState, useEffect } from 'react';
import {
    Autocomplete,
    TextField,
    CircularProgress,
    Box,
    Typography,
    Grid,
    Chip
} from '@mui/material';
import axios from 'axios';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import LaunchIcon from '@mui/icons-material/Launch';
import { apiURL, autocompleteURL, getMostSearchedWordsURL, suggestionsURL } from '../../Helpers/helpers';

export default function MainSearch({ handleLoadingFromParent = () => { }, onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [mostSearchedWords, setMostSearchedWords] = useState([])
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const handleSuggestionClick = (s) => {
        if (onSelect) onSelect(s);
    }
    useEffect(() => {
        const fetchTopSearches = async () => {

            try {
                setLoading(true);
                const config = { params: { keyword: '' } };
                const result = await axios.get(`${apiURL}${getMostSearchedWordsURL}`, config);
                console.log('result---', result)
                setMostSearchedWords(['ab', 'xd']);
            } catch {
                setMostSearchedWords([]);
            } finally {
                setLoading(false);
            }
        }
        fetchTopSearches();
    }, [])

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
                    const url = `${apiURL}${suggestionsURL}`;
                    const { data } = await axios.get(url, {
                        params: { word: inputValue, max: 3 }
                    });
                    setSuggestions(data || [])
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

    // useEffect(() => {
    //     if (handleLoadingFromParent) handleLoadingFromParent(loading);
    // }, [handleLoadingFromParent, loading])
    const isDoYouMean = inputValue?.length > 2 && !options.length && suggestions.length > 0;
    const showMostSearchedWords = !isDoYouMean && mostSearchedWords.length > 0;

    return (
        <>
            {/* Row 1: full‑width search bar */}

            <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }}>


                <Autocomplete
                    freeSolo={false}
                    autoComplete
                    autoHighlight
                    filterOptions={(x) => x}
                    value={value}
                    onChange={(_, newVal, reason, details) => {
                        setValue(newVal);
                        if (reason === 'selectOption') {
                            onSelect?.(newVal);
                        }
                        console.log("details---", details)
                    }}
                    inputValue={inputValue}
                    onInputChange={(_, v, reason) =>
                        reason === 'input' && setInputValue(v)
                    }

                    options={options}
                    loading={loading}
                    loadingText="Loading…"
                    noOptionsText={
                        inputValue.length < 2
                            ? 'Type at least 2 characters'
                            : 'No options found'
                    }

                    popupIcon={null}
                    openOnFocus
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search whatever you want...."
                            fullWidth
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                    <>
                                        {loading && <CircularProgress size={20} />}
                                        {params.InputProps.endAdornment}
                                    </>
                                )
                            }}
                        />
                    )}
                />

            </Grid>

            {/* Row 2: “Most Searched Words” row*/}
            {
                showMostSearchedWords ?
                    <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',

                                //reserve space so layout never jumps:
                                minHeight: '2rem',
                            }}
                        >

                            <Typography
                                variant="subtitle1"
                                component="span"
                                sx={{ mr: 3 }}
                            >
                                <Chip icon={<TrendingUpIcon />} className='custom-chip' label='Most searched words' />
                            </Typography>
                            {mostSearchedWords.map((s) => (
                                <Chip
                                    key={s}
                                    label={s}
                                    size="small"
                                    color="primary"
                                    className='suggestions-chip'
                                    onClick={() => handleSuggestionClick(s)}
                                    sx={{ ml: 1 }}
                                    deleteIcon={<LaunchIcon />}
                                    onDelete={() => handleSuggestionClick(s)}
                                />
                            ))}
                        </Box>
                    </Grid>
                    : null}


            {/* Row 3: “Did you mean” row*/}
            {isDoYouMean ? <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 6 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',

                        //reserve space so layout never jumps:
                        minHeight: '2rem',
                    }}
                >

                    <Typography
                        variant="subtitle1"
                        component="span"
                        sx={{ mr: 3 }}
                    >
                        <Chip icon={<TroubleshootIcon />} className='custom-chip-red-icon' label='Did you mean' />
                    </Typography>
                    {suggestions.map((s) => (
                        <Chip
                            key={s}
                            label={s}
                            size="small"
                            className='suggestions-chip'

                            color="primary"
                            onClick={() => handleSuggestionClick(s)}
                            sx={{ ml: 1 }}
                            deleteIcon={<LaunchIcon />}
                            onDelete={() => handleSuggestionClick(s)}
                        />
                    ))}
                </Box>
            </Grid> : null}

        </>
    );
}
