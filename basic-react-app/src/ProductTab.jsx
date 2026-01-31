import Product from "./Product"

function ProductTab() {
    let options = ["slimmest in this segment","jumbo performance","smooth writing"];

    return (
        <>
        <Product title = "phone" price = {35000} features = {["slimmest in this segment","jumbo performance","smooth writing"]} features2 = {{a:"SLIMMEST",B:"PERFORMANCE",c:"SMOOTH"}}/>
        {/* <Product title = "laptop" price = {60000} features = {options[1]} features2 = {options2}/> */}
        {/* <Product title = "pen" price = {45} features = {options[2]} features2 = {options2}/> */}
        </>
    )
}

export default ProductTab