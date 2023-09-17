import "prismjs/themes/prism-tomorrow.css"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
import React from "react"
import { Provider } from "react-redux"
import store from "./src/modules/Store" // 실제 경로로 변경하세요.

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
