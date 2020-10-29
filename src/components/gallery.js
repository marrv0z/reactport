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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

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

export default function Gallery() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid item xs>
        <TabPanel value={value} index={0}>
                <span>Intro</span>
                <h2>Integrated Operational Framework</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <Card className={classes.pic}>
                  <CardMedia
                    component="img"
                    alt="Test"
                    image="framework2.jpg"
                    title="Test"
                  />
                </Card>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>High School Robotics</span>
                <h2>GREATER ACCESS</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Advanced Robotics UTSA</span>
                <h2>GREATER ACCESS</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>UTSA Student Web Assistant</span>
                <h2>INCREASED ENROLLMENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Hobbies Free Time</span>
                <h2>INCREASED ENROLLMENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Grid container>
            <Grid item xs={1}>
              <Container>
                <span>Academics</span>
                <h2>INCREASED ENROLLMENT</h2>
                <p>
                Bacon ipsum dolor amet short loin pancetta cow leberkas picanha, buffalo capicola turkey bacon. Pork bresaola venison, strip steak swine ball tip flank sausage corned beef turkey. Tongue kielbasa landjaeger, pastrami fatback chislic chuck meatball tail. Capicola strip steak chislic sirloin sausage short loin. Short ribs shankle buffalo sausage ground round.
                </p>
                <p>
                Leberkas strip steak short loin turkey meatball. Strip steak biltong leberkas sausage corned beef, tongue beef tail andouille chuck spare ribs. Bacon biltong pancetta turducken porchetta chicken. Jowl chuck cow kielbasa kevin rump shoulder pork belly jerky, pork chop venison landjaeger filet mignon. Pastrami fatback corned beef chislic pig pancetta jerky pork picanha pork chop venison buffalo. Ball tip short ribs beef, boudin spare ribs buffalo t-bone ham hock pork loin ribeye biltong. Pork   chop brisket leberkas ham boudin tenderloin, short ribs alcatra hamburger pig flank cupim.
                </p>
              </Container>
            </Grid>
          </Grid>
        </TabPanel>
        
        
      </Grid>
      <Grid item xs>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          TabIndicatorProps={{ style: {backgroundColor: 'grey', width:'100%', opacity: 0.5}}}
        >
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Intro" {...a11yProps(0)}></Tab>
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="High School Robotics" {...a11yProps(1)}></Tab>
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Advanced Robotics UTSA" {...a11yProps(2)}></Tab>
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="UTSA Student Web Assistant" {...a11yProps(3)}></Tab>
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Hobbies/Free Time" {...a11yProps(4)}></Tab>
          <Tab style={{borderBottom:`1px solid`, minHeight: '80px'}} label="Academics" {...a11yProps(5)}></Tab>
        </Tabs>
      </Grid>
    </div>
  );
}
