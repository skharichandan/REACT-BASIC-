import "./Product.css"

function Product({title,price,features, features2}) {
    // console.log(features);
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <h5>Features : {features}</h5>
            <h5>Features2 : {features2}</h5>
        </div>
    );
}

export default Product;