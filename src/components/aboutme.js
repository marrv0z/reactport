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
    ...theme.typography.body1,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '120vh',
    flexDirection: 'column',
    
  },
  pic: {
    width: 300
  },
  text:{
    ...theme.typography.h1,
    color: "red"
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs>
        <h2 className={classes.text}>Kristian M Rodriguez Villanueva</h2>
        <p>Hi! My name is Kristian, but you can call me Kris. I am currently a sophomore at UTSA, 
          pursueing a major in Computer Science. I am also currently working at UTSA as a 
          Student Web Assistant, helping improve the styling in UTSA pages. I acquired my 
          programming skills from the UTSA Coding Boot Camp, from which I graduated June of 2020, 
        and from my participation in robotics, both in High School and College. I have expereince 
        in HTML, CSS, JavaScript, Python, and Java. I know the basics of C and C++ due to a 
        couple classes I've taken, and I've used to program Arduinos, however, I'm still waiting 
        on a chance to using them in real life. I have acquired a passion for programming and 
        look forward to learning more.
        </p>
        <p>Here is a list of technologies that I've gotten my hands into, from frameworks to databases:</p>
        <p>

        </p>
        <ul>
          <li>React.js (used in this portfolio)</li>
          <li>Node.js</li>
          <li>APIs</li>
          <li>Express</li>
          <li>MongoDB, Mongoose</li>
          <li>MySQL, Sequelize</li>
          <li>Redux</li>
          <li>Bootstrap</li>
          <li>Material UI</li>
          <li>Heroku/Git/Github</li>
          <li>CMS: WordPress and Cascade</li>
          <li>Platforms: Visual Studio, Visual Studio Code, Arduino IDE, Android Studio</li>
        </ul>
        <Card>
          <CardMedia
            className={classes.pic}
            component="img"
            alt="Me"
            image="me.jpeg"
            title="me"
          />
        </Card>
        
      </Grid>
    </div>
  );
}