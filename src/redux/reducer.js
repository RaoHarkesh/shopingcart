
let initialstate =[
    {
        id:0,
        name:"Iphone",
        img:"https://images-eu.ssl-images-amazon.com/images/I/31jgoap1cQL._SY445_SX342_QL70_FMwebp_.jpg",
        qty:0 ,
        price: 80000 
    },
    
    {
       id:1,
       name:"Boult Cosmic",
       img:"https://rukminim1.flixcart.com/image/312/312/l572ufk0/smartwatch/i/4/0/-original-imagfxhngfakhagv.jpeg?q=70",
       qty:0,
       price:1999
    },
    {
      id:2,
      name:"APPLE iMac Core i5 (7th Gen)",
      img:"https://rukminim1.flixcart.com/image/416/416/ktlu9ow0/allinone-desktop/6/p/q/mhk03hn-a-apple-original-imag6xfhaxggptbk.jpeg?q=70",
      qty:0,
      price:92990   
    },
    
    {
        id:3,
        name:"TOMMY HILFIGER Watch",
        img:"https://rukminim1.flixcart.com/image/495/594/kt0enww0/watch/p/b/l/th1791462-tommy-hilfiger-men-original-imag6gyaksajng9b.jpeg?q=50",
        qty:0,
        price:9999   
      },
      {
        id:4,
        name:"Bose Queitcomfort Earbuds Bluetooth Headset",
        img:"https://rukminim1.flixcart.com/image/612/612/l111lzk0/headphone/n/z/i/queitcomfort-earbuds-bose-original-imagczu8vbyyfahs.jpeg?q=70",
        qty:0,
        price:26990  
      },
      {
        id:5,
        name:"Lenovo Gaming Laptop",
        img:"https://rukminim1.flixcart.com/image/312/312/l3rmzrk0/computer/z/2/c/-original-imagetjyhhtrtkdg.jpeg?q=70",
        qty:0,
        price:157990  
      },
      {
        id:6,
        name:"Asus Gaming Laptop",
        img:"https://rukminim1.flixcart.com/image/312/312/kz4gh3k0/computer/n/e/x/fx506lh-hn258ws-gaming-laptop-asus-original-imagb7hfzhmv6v9y.jpeg?q=70",
        qty:0,
        price:57990  
      },
      {
        id:7,
        name:"xbox fortnite series",
        img:"https://rukminim1.flixcart.com/image/612/612/kwjkuq80/gamingconsole/z/w/m/512-series-s-fortnite-rocket-league-bundle-xbox-no-original-imag976xt7mgzddr.jpeg?q=70",
        qty:0,
        price:31900  
      },
      {
        id:8,
        name:'IPhone',
        img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
        price:40000,
        qty:0,
    },
    {
        id:9,
        name:"Kia car",
        img:"https://imgd.aeplcdn.com/0x0/n/cw/ec/115451/sonet-exterior-left-front-three-quarter.jpeg?isig=0",
        price:1000000,
        qty:0,
    },
    {
        id:10,
        name:"PS 4",
        img:"https://www.reliancedigital.in/medias/Sony-CUH-2208B-Gaming-Console-491898064-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzQ2MTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGNiL2gxYi85Mzc4MzMyNTQwOTU4LmpwZ3w4NTE2ZjkzYjQ2NWQwMDY0OTgzZjUxMGFiMmQxMWZlY2I0NGQ1ZjA4Y2RjN2ViOTQ1YzliYTIzNWM4Mjc4NWEw",
        price:30000,
        qty:0
    },
    
    {
        id:11,
        name:"boAt Aavante Bar 3100D 260 W Bluetooth Soundbar",
        img:"https://rukminim1.flixcart.com/image/416/416/kiqbma80-0/speaker/soundbar/l/l/o/aavante-bar-3100d-boat-original-imafygcgjbcerj7f.jpeg?q=70",
        price:10999,
        qty:0
    }

]

let reducer = (state=initialstate, action)=>{
   let id  = action.payload
   let newarr = state.map((ele)=>ele); 
   switch(action.type){
        case "addtocart" :
        newarr[id].qty = newarr[id].qty + 1;    
        return newarr;
            case "removefromcart" :
            if(newarr[id].qty>0)
            newarr[id].qty = newarr[id].qty -1;     
            return newarr;
                 default :
                 return state
   }
}

export default reducer