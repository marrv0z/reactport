import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return(
      <div>
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
      </div>
    )
  }
}

export default Contact;