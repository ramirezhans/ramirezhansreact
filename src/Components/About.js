import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    
    if (!this.props.data) return null;

    const fullname = this.props.data.fullname;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const birthday = this.props.data.birthday;
    const course = this.props.data.course;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Me"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Details</h2>
                  <p className="address">
                    <span>{fullname}</span>
                    <br />
                    <span>{city}</span>
                    <br />
                    <span>{birthday}</span>
                    <br />
                    <span>{course}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
