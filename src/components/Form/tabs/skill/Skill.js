import React from 'react'
import { Grid, TextField, Typography } from '@mui/material'

const Skill = () => {
  return (
    <div>
        <Typography component="h1" variant="h5">
            Skill
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} >
            <TextField
                required
                fullWidth
                name="skill"
                label="Skill"
                type="text"
                id="skill"
            />
            </Grid>
        </Grid>
    </div>
  )
}

export default Skill
