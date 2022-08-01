import { filter, index } from 'd3'
import {useSelector} from 'react-redux'
const Cart = ()=>{
    let state = useSelector((state)=>state)
    let filterarr = state.filter((ele)=>{
       return ele.qty>0
    })
    let total=0;
    return(
        <>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">product Name</th>
      <th scope="col">Price</th>
      <th scope="col">Qty</th>
      <th scope="col">Amount</th>
    </tr>
  </thead>
  <tbody>
    {
        filterarr.map((ele)=>{
            let amount = ele.price*ele.qty
            total+=amount
            return (
                
                <tr key={ele.id+1}>
                <th scope="row">{ele.id+1}</th>
                <td>{ele.name}</td>
                <td>{ele.price}</td>
                <td>{ele.qty}</td>
                <td>{amount}</td>
              </tr>
                
            )
        })
    }
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      {total!=0&&<><td>Total</td>
       <td>{total}</td></>}
    </tr>
   
  </tbody>
</table>
        </>
    )
}

export default Cart