import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import CardMedia from '@material-ui/core/CardMedia';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
 

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle >Weather App</CardTitle>
            <CardMedia
                component="img"
                alt="Test"
                image="weatherApp.png"
                title="Test"
            />
            <CardText>
              This app allows you to see the weather for the next 5 days of any location you want. Just input the location!
            </CardText>
            <CardActions border>
              <Button href="https://github.com/marrv0z/Weather_App" colored>GitHub</Button>
              <Button href = "https://marrv0z.github.io/Weather_App/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle>Bing Me Food</CardTitle>
            <CardMedia
                component="img"
                alt="Test"
                image="bingmefood.png"
                title="Test"
            />
            <CardText>
            This app allows you to locate a restaurant, to get direction to such restaurant, and to see the first 5 thing in the menu of such resturant! Just type in the restaurant of your desire.
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/loneyb11/Class_Project_01" colored>GitHub</Button>
              <Button href = "https://loneyb11.github.io/Class_Project_01/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle>DreamStream</CardTitle>
            <CardMedia
                component="img"
                alt="Test"
                image="dreams.png"
                title="Test"
            />
            <CardText>
            This is a blog where you can share your dreams anonymously! Just create an account and start posting your dreams. A random image will be assigned to each dream your post, however, there's a bug that has not been fixed, the image links from the API used only last about a week and dissappear after that, showing no pics on posts older than a week.
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/marrv0z/project2" colored>GitHub</Button>
              <Button href="https://shrouded-fjord-87134.herokuapp.com/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle >Password Generator</CardTitle>
            <CardMedia
                component="img"
                alt="Test"
                image="pswgen.png"
                title="Test"
            />
            <CardText>
              This app allows you to generate passwords randomly of any length less than 128 characters.
            </CardText>
            <CardActions border>
              <Button href = "https://github.com/marrv0z/Password_Generator" colored>GitHub</Button>
              <Button href="https://marrv0z.github.io/Password_Generator/" colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    }  else if(this.state.activeTab === 1) {
        return (
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle>PRITY</CardTitle>
              <CardMedia
                component="img"
                alt="Test"
                image="PRITY.png"
                title="Test"
              />
              <CardText>
                This app allows you to play with makeup! You personalize your own avatar and try on differen makeup products from your selection. You must create an account in order to be able to play with it.
              </CardText>

              <CardActions border>
                <Button href="https://github.com/kristycode/PRITY" colored>GitHub</Button>
                <Button href = "https://safe-savannah-83884.herokuapp.com/" colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        )
     } 
  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML / JavaScript</Tab>
          <Tab>React</Tab>
          {/* <Tab>JavaScript</Tab> */}
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;