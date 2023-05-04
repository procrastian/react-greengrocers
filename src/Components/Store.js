
export default function Store ({storeState}) {

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
                    <button>Add to cart</button>
                </li>
              ))}
        </ul>
      </header>
    )
}