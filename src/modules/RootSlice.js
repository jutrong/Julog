import { combineReducers } from "redux"
import { menuReducers } from "../modules/slice/MenuSlice"

const rootReducer = combineReducers({
  menuReducers,
})

export default rootReducer
