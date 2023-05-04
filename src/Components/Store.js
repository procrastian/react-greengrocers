import AddToCart from "./AddToCart";

export default function Store ({storeState, cartState, setCartState}) {

    return (
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
            {storeState.map((item, index) => (
                <li key={index}>
                    <div className="store--item-icon">
                        <img 
                            src={`/assets/icons/${item.id}.svg`}
                            alt={`${item.name}`}
                        />
                    </div>
                    <AddToCart id={`${item.id}`} storeState={storeState} cartState={cartState} setCartState={setCartState}/>
                </li>
              ))}
        </ul>
      </header>
    )
}