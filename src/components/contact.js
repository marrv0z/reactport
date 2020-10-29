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
  tabs: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '65vh',
    // margin: '50px',
    position: 'center',
    backgroundColor: '#0c2340',
    color: 'white'
    // '#0c2340'
  },
  collegeTabs: {
    paddingTop: `2.5rem`,
    backgroundColor: '#FFFFFF',
    color: '#0c2340'
  },
  paper: {
    border: `3px solid #000`
  },
  media: {
    height: 400,
  },
  pic: {
    width: 800
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs>
        <h2>Contact Me</h2>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        <h5>Phone</h5>
        <p>(210) 965-1982</p>
        <h5>Email</h5>
        <p>marrv00@outlook.com</p>
        <h5>Github</h5>
        <a href= "https://github.com/marrv0z">marrv0z</a>
        <h5>LinkedIn</h5>
        <a href="https://www.linkedin.com/in/kristian-rodriguez-villanueva-839aa1162/">Kristian Rodriguez Villanueva</a>
        <h5>Resume</h5>
        <a href="file:///C:/Users/marrv/Documents/books/Resume06-2020.pdf">Click Here for my full resume</a>
        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
        
      </Grid>
    </div>
  );
}