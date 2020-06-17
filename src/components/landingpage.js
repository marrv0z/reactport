import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>

            <div className="banner-text">
              <h1>Welcome to my porfolio! Feel free to navigate around!</h1>
            <hr/>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;