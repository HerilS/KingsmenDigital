import React from "react"
import inkCloud from "../../images/inkCloud.mp4"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import placeholderInkBlot from "../../images/placeholders/inkBlot.png"
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      overflow: "auto",
    },
    video: {
      position: "absolute",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "101%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: -1,
      filter: "brightness(40%)",
    },
    text: {
      height: "100vh",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      fontSize: "2.8rem",
      paddingLeft: "2rem",
      lineHeight: "4rem",
      color: "white",
      display: "flex",
      alignItems: "center",
      marginTop: "auto",
      [theme.breakpoints.down(715)]: {
        paddingRight: "1.5rem",
        fontSize: "2rem",
        lineHeight: "2.8rem",
      },
    },
    container: {
      overflow: "auto",
    },
    button: {
      zIndex: 3,
      color: "white",
      backgroundColor: "#DD2854",
      textTransform: "none",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 500,
      padding: "0.7rem",
      transition: "all 0.4s ease",
      "&:hover": {
        backgroundColor: "#DD2854",
        opacity: "85%",
      },
    },
    subText: {
      fontWeight: "lighter",
      paddingTop: "0.9rem",
      paddingBottom: "0.9rem",
      fontFamily: "Poppins, sans-serif",
      fontSize: "1rem",
      lineHeight: "2rem",
      width: "30rem",
      [theme.breakpoints.down(600)]: {
        fontSize: "1rem",
        width: "auto",
        paddingRight: "3rem",
      },
      [theme.breakpoints.down(370)]: {
        fontSize: "0.9rem",
        lineHeight: "1.5rem",
        width: "auto",
        paddingRight: "0.7rem",
      },
    },
    title: {
      width: "35rem",
      [theme.breakpoints.down(715)]: {
        width: "auto",
      },
      [theme.breakpoints.down(370)]: {
        fontSize: "1.8rem",
        lineHeight: "2.3rem",
      },
      [theme.breakpoints.down(345)]: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
    },
  })
)

const PanelOne = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <SEO title="Homepage" />
      <div className={classes.container}>
        <video
          autoPlay
          muted
          playsInline
          loop="loop"
          className={classes.video}
          src={inkCloud}
          type="video/mp4"
         
        />{/*poster={placeholderInkBlot}*/}
      </div>
      <div className={classes.text}>
        <div>
          <div className={classes.title}>
            Focus on what you do best. We'll find you the clients.
          </div>
          <div className={classes.subText}>
            We'll find your customers, control your search engine optimization,
            and social media optimization, so you can focus on what you do best.
          </div>
          <Button className={classes.button}>Get In Touch</Button>
        </div>
      </div>
    </div>
  )
}
export default PanelOne
