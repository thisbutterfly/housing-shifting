import React, { Component } from "react"

export default class Contact extends Component {
  render() {
    return (
      <div className="section">
        <div id="contact" className="container">
          <h1 className="is-size-1 has-text-centered has-text-weight-bold">
            Get In Touch
          </h1>
          <div className="contact-container">
            <div className="contact-wrap column has-text-weight-bold has-text-white-bis">
              <p className="header is-size-4">Call us at: </p>
              <span className="subtitle is-size-5 has-text-white-bis">
                91-9166475912
              </span>
              <br />
              <span className="subtitle is-size-5 has-text-white-bis">
                91-7597402710
              </span>
            </div>
            <div className="contact-wrap column has-text-weight-bold has-text-white-bis">
              <p className="header is-size-4">Email us: </p>
              <p className="subtitle is-size-5 has-text-white-bis">
                lifelinepackersandmovers@gmail.com
              </p>
            </div>
            <div className="contact-wrap-two column has-text-weight-bold has-text-white-bis">
              <p className="header is-size-4">Address: </p>
              <p className="subtitle is-size-5 has-text-white-bis">
                V.K.I. Vishav karma 14 number, Jaipur
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
