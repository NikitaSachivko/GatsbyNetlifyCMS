import * as React from "react"
import { Link } from "gatsby"
import Bar from "./Navigation/Bar"
import '../styles/lux.css'

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
      <div
        data-is-root-path={isRootPath}
        style={{ marginLeft: "20%", marginRight: "10%", marginTop: "2%" }}
      >
        {
          !isRootPath && (
            <>
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Buh.guru
                {` `}
              </footer>
            </>
          )
        }
        {
          isRootPath && (
            <div class="flex">
              <div class="m-auto">
                <h1>Всё просто</h1>
                <h2>Вопросы бухгалтерии решают профессионалы</h2>
              </div>
            </div>
          )
        }
      </div>


    </>
  )
}

export default Layout
