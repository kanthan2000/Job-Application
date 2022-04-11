import React from 'react'
import Box from '@mui/material/Box';
import { Grid, TextField, Typography } from '@mui/material'

const Skill = () => {
  return (
    <div>
      <Box sx={{
					marginTop: 5,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					}} >
        <Typography  sx={{color: "black"}} component="h1" variant="h5">
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
        </Box>
    </div>
  )
}

export default Skill
