import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>
            
            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
          <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card p-4 border-blue">
          </div>
        </div>
      </div>
    </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_phone">
                <h4>Give me a call</h4>
                <p className="address">
                  {phone}
                </p>
              </div>
              <div className="widget widget_email">
                <h4 className="widget-title">Send me an email</h4>
                <p className="address">
                  {email}
                </p>
              </div>
              <div className="widget widget_facebook">
                <h4 className="widget-title">Facebook</h4>
                <a href="https://www.facebook.com/hans.rocks44/">facebook.com/hans.rocks44</a>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
