import "./Product.css"

function Product({title,price}) {
   let styles = {backgroundColor : "blue"}; 
    return (
        <div className="Product" style = {styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price > 30000 && <p>Discount of 5%</p>}
        </div>
    );  
}

export default Product;