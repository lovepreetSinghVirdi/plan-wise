import React, { useState, useEffect } from 'react';
import {
    Autocomplete,
    TextField,
    Box,
} from '@mui/material';

export default function PlanSearch({ onSelect }) {
    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState(null);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (inputValue.length < 2) {
            setOptions([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const timer = setTimeout(() => {
            setOptions(['option1', 'option2', 'option3']);
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, [inputValue]);

    return (
        <Box sx={{ width: '100%' }}>
            <Autocomplete
                freeSolo={false}
                value={value}
                onChange={(_, newVal, reason, details) => {
                    setValue(newVal);
                    if (reason === 'selectOption') {
                        console.log('User picked:', newVal);
                        console.log('Details about that option:', details);
                        onSelect?.(_, newVal, reason, details);

                    }
                }}

                inputValue={inputValue}
                onInputChange={(_, newInput) => {
                    setInputValue(newInput);
                }}

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
                        // placeholder="Enter at least 2 characters"
                        fullWidth
                    />
                )}
            />

        </Box>
    );
}
