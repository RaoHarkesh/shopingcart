const Preview = ()=>{
   return(
    <>
    <div className="preview-main-div">
        <div className="preview-left">
        <img style={{"width" : "30rem"}} src="https://images-eu.ssl-images-amazon.com/images/I/31jgoap1cQL._SY445_SX342_QL70_FMwebp_.jpg" class="img-fluid" alt="..."/>
        <div className="preview-left-down-btns">
        <button type="button" class="btn btn-primary">Add to cart</button>
        <button type="button" class="btn btn-primary">Buy now</button>
        </div>
        </div>
        <div className="preview-right">
            <div className="product-name">APPLE iPhone 11 (Black, 64 GB)</div>
            <div className="product-price">₹46,999</div>
            <div className="product-offers"></div>
        </div>
    </div>
    </>
   )
}
export default Preview