import {hanldeCreateMealPopUp,handleProfilePopUp,handlepassword,contactModel} from "./CreateMealReducer";
import { combineReducers, } from "redux";

const rootReducer =combineReducers({
    hanldeCreateMealPopUp,
    handleProfilePopUp,
    handlepassword,
    contactModel
})

export default rootReducer