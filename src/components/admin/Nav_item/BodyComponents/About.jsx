import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import Pictures from "../../../pictures/home.avif";
import { RenderSectionHeading, CardMedia } from "../common/CommonComponents";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import ToysIcon from '@mui/icons-material/Toys';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Portfolio from './Portfolio'
import Footer from './Footer'
//import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: " Web Development",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <DashboardIcon />,
    },
    {
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
     icon: <ToysIcon />,
    },
    {
      title: "Mobile Apps",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Marketing",
      description: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
     icon: <AcUnitIcon />,
    },
  ];
  return (
    <>
    <Box className={classes.section} id='About'>
        <Container>
          <Grid container spacing={1}>
            <Grid item sm={5}>
              <Box component={Hidden} xsDown>
                <img
                  src={Pictures}
                  alt=' about us'
                  className={classes.responsiveImg}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "HELLO CODERS AND DEVELOPER",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
              })}
              <br />
              {/* {CardMedia({
              label: "labae1",
              Desc: "Desc1",
              Icon: <AcUnitIcon />,
            })} */}
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Desc: item.description,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
    </Box>
    <Portfolio />
    <Footer />
        </>
  );
}
