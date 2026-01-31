import Product from "./Product"

function ProductTab() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent:"center",
        alignItems: "center"
    };
    return (
        <div style ={styles}>
        <Product title="Nutricook InstaPot 2" idx={0}/>
        <Product title="Agaro Regaro Electric Cooker" idx={1}/>
        <Product title ="Philips Air Fryer" idx={2}/>
        <Product title ="Kent Air Fryer" idx={3}/>
        </div>
    )
}

export default ProductTab