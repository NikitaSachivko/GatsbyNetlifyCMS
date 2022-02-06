import * as React from "react"
import { Link } from "gatsby"
import Bar from "./Navigation/Bar"

const Layout = ({ location, title, routes, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <>
      <Bar routes={routes} location={location} />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Buh.guru
          {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout
