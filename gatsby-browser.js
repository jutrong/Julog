import "prismjs/themes/prism-tomorrow.css"
import React from "react"
import { Provider } from "react-redux"
import store from "./src/modules/Store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
