import React from 'react';
//import { Grid, Card, CardTitle, CardText } from 'react-mdl';
import { Grid } from 'react-mdl';
import { Container, Tabs, Tab, Box, Typography} from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{backgroundColor:'white'}}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '120vh'
  },
  pic: {
    width: 200
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs>
        <h2>Kristian M Rodriguez Villanueva</h2>
        <p>Hi! My name is Kristian, but you can call me Kris. I am currently a sophomore at UTSA,<br></br>
        pursueing a major in Computer Science. I am also currently working at UTSA as a<br></br>
        Student Web Assistant, helping improve the styling in UTSA pages. I acquired my<br></br>
        programming skills from the UTSA Coding Boot Camp, and from my participation in<br></br>
        robotics, both in High School and College. I have expereince in HTML, CSS, JavaScript,<br></br>
        Python, and Java. I know the basics of C and C++ due to a couple classes I've taken, <br />
        however, I'm still waiting on a chance to using them in real life. I have acquired a passion<br />
        for programming and look forward to learning more.
        </p>
        <p>I've created this portfolio using React.js, however there's many other technologies that I've gotten my hands into.</p>
        <Card className={classes.pic}>
          <CardMedia
            component="img"
            alt="Test"
            image="me.jpeg"
            title="Test"
          />
        </Card>
        
      </Grid>
    </div>
  );
}