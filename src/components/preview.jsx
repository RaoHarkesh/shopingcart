import { useParams } from 'react-router';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCreator, removeCreator } from '../redux/action';
const Preview = () => {
    let { id } = useParams();
    let state = useSelector((state) => state);
    let requireobj = state[id];
    let dispatch = useDispatch()

    return (
        <>

            <div className="preview-main-div">
                <div className="preview-left">
                    <img style={{ "width": "30rem" }} src={requireobj.img} class="img-fluid" alt="..." />
                    <div className="preview-left-down-btns">
                        <button onClick={() => { dispatch(addCreator(requireobj.id)) }} type="button" class="btn btn-primary">Add to cart</button>
                        <button onClick={() => { dispatch(removeCreator(id)) }} type="button" class="btn btn-danger">Remove</button>
                    </div>
                </div>
                <div className="preview-right">
                    <div className="product-name">{requireobj.name}</div>
                    <div className="product-price">₹{requireobj.price}</div>
                    <div className="poffers">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                </div>
            </div>
        </>
    )
}
export default Preview