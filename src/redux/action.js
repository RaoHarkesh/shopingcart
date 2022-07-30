export const addCreator = (id)=>{
    return{
        type: "addtocart",
        payload: id
    }
}

export const removeCreator =(id)=>{
    return{
        type: "removefromcart",
        payload: id
    }
}