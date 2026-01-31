import Product from "./Product"

function ProductTab() {
    let options = ["slimmest in this segment","jumbo performance","smooth writing"];

    return (
        <>
        <Product title = "phone" price = {35000} features = {options}/>
        <Product title = "laptop" price = {60000} features = {options}/>
        <Product title = "pen" price = {45} features = {options}/>
        </>
    )
}

export default ProductTab