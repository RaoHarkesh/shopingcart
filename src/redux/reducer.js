
let initialstate =[
    {
        id:0,
        name:"Iphone",
        img:"https://images-eu.ssl-images-amazon.com/images/I/31jgoap1cQL._SY445_SX342_QL70_FMwebp_.jpg",
        qty:1 ,
        price: 80000 
    },
    
    {
       id:1,
       name:"Boult Cosmic",
       img:"https://rukminim1.flixcart.com/image/312/312/l572ufk0/smartwatch/i/4/0/-original-imagfxhngfakhagv.jpeg?q=70",
       qty:1,
       price:1999
    },
    {
      id:2,
      name:"APPLE iMac Core i5 (7th Gen)",
      img:"https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/allinone-desktop/6/p/q/mhk03hn-a-apple-original-imag6xfhaxggptbk.jpeg?q=70",
      qty:1,
      price:92990   
    }
    
]

let reducer = (state=initialstate, action)=>{
   switch(action.type){
        case "addtocart" :
        let newarr = state.map((ele)=>ele);
        let id = action.payload;
        newarr[id].qty = newarr[id].qty + 1;    
        return newarr;
            case "removefromcart" :
            id = action.payload;
            if(newarr[id].qty>0)
            newarr[id].qty = newarr[id].qty -1;     
            return newarr;
                 default :
                 return state
   }
}

export default reducer