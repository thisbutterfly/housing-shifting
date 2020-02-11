import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const SocialHeader = () => (
  <div className="wrapper">
    <div className="container" style={{display: "flex", justifyContent: "space-between"}}>
      <div className="is-size-5 has-text-white has-text-weight-bold">
        <p>AGRWAL HOME SHIFTING</p>
      </div>
      <div className="logo">
        <div className="logo-container">
          <div className="image">
            <FontAwesomeIcon
              icon={faCoffee}
              size="s"
              style={{ color: "#fff" }}
            />
          </div>
          <div className="image">
            <FontAwesomeIcon
              icon={faCoffee}
              size="s"
              style={{ color: "#fff" }}
            />
          </div>
          <div className="image">
            <FontAwesomeIcon
              icon={faCoffee}
              size="s"
              style={{ color: "#fff" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SocialHeader
