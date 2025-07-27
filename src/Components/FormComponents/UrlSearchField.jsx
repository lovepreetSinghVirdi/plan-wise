import React, { useState } from 'react'
import {
  Box,
  TextField,
  InputAdornment,
  Button
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const UrlSearchField = ({ onSearch }) => {
  const [url, setUrl] = useState('')
  const [error, setError] = useState(false)

  const urlRegex = /^(https?:\/\/)(([\da-z.-]+)\.([a-z.]{2,6})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[\w\-./?%&=]*)?$/

  const handleSubmit = e => {
    e.preventDefault()
    if (urlRegex.test(url)) {
      setError(false)
      onSearch?.(url)
    } else {
      setError(true)
    }
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', alignItems: 'stretch', }}
    >
      <TextField
        fullWidth
        label="Enter URL"
        variant="outlined"
        value={url}
        onChange={e => setUrl(e.target.value)}
        error={error}
        helperText={error ? 'Please enter a valid URL.' : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{
          // remove the field's right rounding so it mates with the button
          '& .MuiOutlinedInput-root': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            paddingRight: '1rem !important',
          }
        }}
      />

      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{
          // remove the button's left rounding
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          // match default MUI TextField height (~56px)
          height: '56px',
          // ensure it doesn’t shrink
          px: 3
        }}
      >
        Search
      </Button>
    </Box>
  )
}

export default UrlSearchField;
