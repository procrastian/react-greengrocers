export default function AddToCart ({id, storeState, cartState, setCartState}) {

    const handleClick = (e) => {
        console.log('add to cart clicked')
        console.log('e.target.id', e.target.id)
        const clicked = storeState.filter((el) => {
            if (el.id === e.target.id) {
                console.log('found match:', el.id)
                return el
            } else {
                return null
            }
        })
        setCartState(...cartState, clicked)
    }

    return(
        <button id={id} onClick={handleClick}>Add to cart</button>
    )
}