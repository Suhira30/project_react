
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
    export const FormJobDetail = () => {
      return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <InputLabel>Job Title
          <TextField defaultValue="Driver" /></InputLabel>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Job Id
          <TextField defaultValue="D001" /></InputLabel>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Job Description
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
          /></InputLabel>
        </Grid>
      </Grid>
    </Box>
      );
    
    }