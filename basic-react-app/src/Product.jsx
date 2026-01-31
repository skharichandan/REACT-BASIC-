import "./Product.css"

function Product(props) {
    // console.log(props)
    return (
        <div className="Product">
            <h3>{props.title}</h3>
            <h5>{props.price}</h5>
        </div>
    );
}

export default Product;