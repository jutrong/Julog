import "prismjs/themes/prism-twilight.css"
import React from "react"
import { Provider } from "react-redux"
import store from "./src/modules/Store"

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}
export const onInitialClientRender = () => {
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}
