import Product from "./Product"

function ProductTab() {
    let options = [<li>"slimmest in this segment"</li>,<li>"jumbo performance"</li>,<li>"smooth writing"</li>];

    return (
        <>
        <Product title = "phone" price = {35000} features = {options}/>
        <Product title = "laptop" price = {60000} features = {options[1]}/>
        <Product title = "pen" price = {45} features = {options[2]}/>
        </>
    )
}

export default ProductTab