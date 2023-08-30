const initialState = false

const hanldeCreateMealPopUp = (state = initialState, action) => {
    switch (action.type) {
        case "OpenPopUp":
            return true
        case "ClosePopUp":
            return false

        default:
            return state;
    }
}
const handleProfilePopUp = (state = initialState, action) => {
    switch (action.type) {
        case "profileOpen":
            return true
        case "profileClose":
            return false

        default:
            return state;
    }
}

const handlepassword = (state = initialState, action) => {
    switch (action.type) {
        case "passwordOpen":
            return true
        case "passwordClose":
            return false

        default:
            return state;
    }
}
const contactModel =(state=initialState,action)=>{
    switch (action.type) {
        case "contactOpen":
            return true
        case "contactClose":
            return false

        default:
            return state;
    }
}
export {
    handleProfilePopUp,
    hanldeCreateMealPopUp,
    handlepassword,
    contactModel
}