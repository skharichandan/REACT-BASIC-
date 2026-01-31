import "./Product.css"

function Product({title,price}) {
    let isDiscount = price > 40000 ? "Discount of 5%" : "";
    
    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{isDiscount}</p>
        </div>
    );  
}

export default Product;