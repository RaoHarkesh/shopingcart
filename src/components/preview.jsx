import { useParams } from 'react-router';
import {useSelector} from 'react-redux'
const Preview = ()=>{
   let {id} = useParams();
   let state = useSelector((state)=>state);
   let requireobj = state[id];
   
    return(
    <>
   
    <div className="preview-main-div">
        <div className="preview-left">
        <img style={{"width" : "30rem"}} src={requireobj.img} class="img-fluid" alt="..."/>
        <div className="preview-left-down-btns">
        <button type="button" class="btn btn-primary">Add to cart</button>
        <button type="button" class="btn btn-primary">Buy now</button>
        </div>
        </div>
        <div className="preview-right">
            <div className="product-name">{requireobj.name}</div>
            <div className="product-price">₹{requireobj.price}</div>
            <div className="poffers"></div>
        </div>
    </div>
    </>
   )
}
export default Preview