// src/Components/FormComponents/MainSearch.jsx
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
import { apiURL, autocompleteURL, suggestionsURL } from '../../Helpers/helpers';

export default function MainSearch({ onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState([]);
    const [suggestions, setSuggestions] = useState([])
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState(null);
    const handleSuggestionClick = (s) => {
        if (onSelect) onSelect(s);
    }

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


            {/* Row 2: always‑there “Did you mean” row (reserves ~2rem even when empty) */}
            <Grid size={{ xs: 12, sm: 8 }} offset={{ sm: 2 }} sx={{ mt: 6 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',

                        //reserve space so layout never jumps:
                        minHeight: '2rem',
                    }}
                >
                    {inputValue && !options.length && suggestions.length > 0 && (
                        <>
                            <Typography
                                variant="subtitle1"
                                component="span"
                                sx={{ mr: 1 }}
                            >
                                Did you mean:
                            </Typography>
                            {suggestions.map((s) => (
                                <Chip
                                    key={s}
                                    label={s}
                                    size="small"
                                    color="primary"
                                    onClick={() => handleSuggestionClick(s)}
                                    sx={{ ml: 1 }}
                                />
                            ))}
                        </>
                    )}
                </Box>
            </Grid>
        </>
    );
}
