import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { addCreator } from '../redux/action'

const Product = () => {
    let dispatch = useDispatch()
    let history = useHistory();
    let statearr = useSelector((state) => state)
    return (
        <>
            <div className="all-items">
                {statearr.map((ele, idx) => {
                    return (
                        <div  key={idx} className="card" style={{ "width": "15rem" }}>
                            <img onClick={()=>{history.push(`/preview/${ele.id}`)}} src={ele.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <button onClick={()=>{dispatch(addCreator(ele.id))}} href="#" className="btn btn-primary">Add TO Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>




        </>
    )
}

export default Product