import { useStaticQuery, graphql } from "gatsby"

const GetRoutes = () => {
  const result = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "routes"}}) {
        edges {
          node {
            relativePath
            prettySize
            extension
            birthTime
          }
        }
      }
    }
  `)
  const nodes = result.allFile.edges
  const routes = nodes.map((node) => {
    const title = node.node.relativePath.replace("-", " ").split("/")[0].trim()
    const link = "/" + node.node.relativePath.split("/")[0].trim() + "/"
    const newRoute = { title: title, link: link }
    return newRoute
  })
  return routes
}

export default GetRoutes
