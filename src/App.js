import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import { useState } from 'react'
import { Store, Cart } from './Components'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35,
  quantity: X
}
*/

console.log(initialStoreItems)


export default function App() {

const [storeState] = useState(initialStoreItems)
const [cartState, setCartState] =useState([])



  return (
    <>
      {console.log(cartState)}
      <Store storeState={storeState} cartState={cartState} setCartState={setCartState}/>
      <Cart cartState={cartState}/>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
