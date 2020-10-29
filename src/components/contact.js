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


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    backgroundColor: theme.palette.background.paper,
    height: '120vh',
    display: 'flex',
    flexDirection: 'column'
  },
  pic: {
    width: 800
  }
}));

export default function About() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Contact Me</h2><br />
      <h5>Phone </h5>
      <p>(210) 965-1982</p>
      <h5>Email</h5>
        <p>marrv00@outlook.com</p>
     <h5>Github</h5>
        <a href= "https://github.com/marrv0z">marrv0z</a>
      <h5>LinkedIn</h5>
        <a href="https://www.linkedin.com/in/kristian-rodriguez-villanueva-839aa1162/">Kristian Rodriguez Villanueva</a>
      <h5>Resume</h5>
        <a href="file:///C:/Users/marrv/Documents/books/Resume06-2020.pdf">Click Here for my full resume</a>
        
    </div>
  );
}