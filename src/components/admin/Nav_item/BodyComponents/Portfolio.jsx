import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { RenderSectionHeading } from "../common/CommonComponents";
import { useStyles } from "./BodyStyles";

import image1 from "../../../pictures/4.jpg";
import image2 from "../../../pictures/3.jpg";
import image3 from "../../../pictures/5.jpg";
import image4 from "../../../pictures/6.jpg";
import image5 from "../../../pictures/7.jpg";
import image6 from "../../../pictures/8.jpg";
//import ScrollAnimation from "react-animate-on-scroll";

export default function Portfolio() {
  const classes = useStyles();

  const portfolioData = [
    { url: image1, title: "# Portfolio ", link: "" },
    { url: image2, title: "# Portfolio ", link: "" },
    { url: image3, title: "# Portfolio ", link: "" },
    { url: image4, title: "# Portfolio ", link: "" },
    { url: image5, title: "# Portfolio ", link: "" },
    { url: image6, title: "# Portfolio ", link: "" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
        <Grid
          container
          style={{
            display: "flex",
            position:"relative",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <Grid item xs={12} sm={8}>
            {RenderSectionHeading({
              smallText: "Portfolio",
              heading: "Let's See My Work",
              alignCenter: true,
            })}
          </Grid>
        </Grid>
        {/* imge section  */}

        <Container maxWidth='xl'>
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className={classes.imageContainer}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className={classes.responsiveImg}
                  />
                  <Box className={classes.imageOverlay}>
                    <Typography className={classes.overlayTitle}>
                      {item.title}
                    </Typography>

                    <Button variant='contained'>Visit</Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
    </Box>
  );
}