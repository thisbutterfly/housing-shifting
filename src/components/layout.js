import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <footer style={{ backgroundColor: "rgba(8, 58, 121, 1)" }}>
        <div className="container has-text-white">
          ©Copyrights reserved {new Date().getFullYear()},
          {` `}
          <a href="http://sjjs.in/">SJJS PVt LTd</a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
