import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const About = () => {
    return (
        <Grid container spacing={2} className="container">
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography variant="body1">
                    As a passionate and dedicated Software Engineer with over two
                    years of professional experience, I specialize in web development
                    and possess a strong foundation in designing, developing, and
                    maintaining scalable and efficient web applications. My journey in
                    the tech industry has been marked by a commitment to continuous
                    learning and a drive to stay at the forefront of technological
                    advancements.
                </Typography>
            </Grid>
        </Grid>
    );
};

export default About;
