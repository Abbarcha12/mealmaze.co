import {hanldeCreateMealPopUp,handleProfilePopUp,handlepassword} from "./CreateMealReducer";
import { combineReducers, } from "redux";

const rootReducer =combineReducers({
    hanldeCreateMealPopUp,
    handleProfilePopUp,
    handlepassword
})

export default rootReducer