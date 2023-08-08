 export const handleOpenPopUp = () => {
     return {
         type: "OpenPopUp",
       
     }

 }

 export const handleClosePopUp = () => {
     return {
         type: "ClosePopUp",
       
     }

 }

export const profileOpen=() =>{
    return{
        type:"profileOpen"
    }
}

export const profileClose=() =>{
    return{
        type:"profileClose"
    }
}
export const OpenPassword=() =>{
    return{
        type:"passwordOpen"
    }
}

export const ClosePassword=() =>{
    return{
        type:"passwordClose"
    }
}