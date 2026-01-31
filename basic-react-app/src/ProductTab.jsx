import Product from "./Product"

function ProductTab() {
    let options = ["slimmest in this segment","jumbo performance","smooth writing"];
    let options2 = {a : "SLIMMEST" , b : "PERFORMANCE" , c : "SMOOTH"}
    return (
        <>
        <Product title = "phone" price = {35000} features = {options[0]} features2 = {options2.a}/>
        <Product title = "laptop" price = {60000} features = {options[1]} features2 = {options2.b}/>
        <Product title = "pen" price = {45} features = {options[2]} features2 = {options2.c}/>
        </>
    )
}

export default ProductTab