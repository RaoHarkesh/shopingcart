import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
const Product = () => {
    let history = useHistory();
    let statearr = useSelector((state) => state)
    return (
        <>
            <div className="all-items">
                {statearr.map((ele, idx) => {
                    return (
                        <div onClick={()=>{history.push(`/preview/${ele.id}`)}} key={idx} className="card" style={{ "width": "15rem" }}>
                            <img src={ele.img} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <a href="#" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    )
                })}
            </div>




        </>
    )
}

export default Product