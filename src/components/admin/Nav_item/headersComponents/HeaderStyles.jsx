import { makeStyles } from '@material-ui/core';
import Pictures from "../../../pictures/ICONIO.jpg";

export const useStyles = makeStyles((theme) => ({
    HeaderWrapper:{
        minHeight:'90vh',
        width:'100%',
        height:'auto',
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Pictures})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
    },
    Headcontainer:{
       width:'85%',
       minHeight:'90vh',
       height:'auto',
       display:'flex',
       padding:"20px",
        color:"white",
       flexFlow:"column wrap",
       justifyContent:"center", 
       fontFamily:"roboto",
    },
    Headertitle:{
        top:"50%",
        fontSize:"2rem",
        margin:theme.spacing(1,0),[theme.breakpoints.down("xs")]:{
            fontsize:"2rem",
        },
    },
    headerDesc: {
      fontSize: "3rem",
      margin: theme.spacing(1, 0),
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },

    Navbarcom:{
        backgroundColor:'#003003',
        color: `white` ,
    },
    ToolBar:{
        color:'white',
        display:"flex",
        flexFlow:" row wrap",
        justifyContent:" space-between",
        },
    navStyle:{
        right:'100px',
        left:'0%',


    },
    Button:{
        display:"flex",
        backgroundColor:"blue",
        color:"white",
    },
     //decorator.
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      content: '""',
      borderRadius: "50%",
    },
  },
  decoratorText: {
    lineHeight: "40px",
    position: " absolute",
    left: "20px",
  },

  arrow: {
    lineHeight: " 50px",
    position: " absolute",
    left: "95px",
    animationName: "upDown",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },

  //creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1,2)",
        paddingTop: "10px",
      },
    },
  },
}))
