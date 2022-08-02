import { useSelector } from "react-redux"
import { useEffect } from 'react'
const Banner = () => {
    let statearr = useSelector((state) => state)

    useEffect(() => {
        let interval = setInterval(() => {
            let randomnum = Math.floor(Math.random() * statearr.length)
            let imgurl = statearr[randomnum].img
            let bannerdiv = document.querySelector(".card-img-top-ban")
            let bantitle = document.querySelector(".ban-title")
            bantitle.innerText = statearr[randomnum].name
            bannerdiv.src = imgurl;
        }, 2000)

        return () => {
            clearInterval(interval)
            console.log("interval closed")
        }
    }, [])





    return (
        <>
      
            <div  className="card banner-img">
                
                <img src={"..."} className="card-img-top card-img-top-ban" alt="...Loading" />
                <div className="card-body">
                    <h5 style={{ "fontWeight": "bold" }} className="card-title ban-title">Loading...</h5>
                   
                </div>
            </div>
        </>
    )
}
export default Banner