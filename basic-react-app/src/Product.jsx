import "./Product.css"
import Price from "./Price";

function Product({title,idx}) {
    let oldPrice = ["22,000","15,000","12,000","7,500"];
    let newPrice = ["15,750","8,600","8,500","5,700"];
    let description = [["Healthy Cooking","Auto cut-off"],["Ceramic Coating","15 Preset Menus"],["Healthy Fryer","German Technology"],["Best in Market","Made in India"]];
    return (
        <div className="Product">
            <h5>{title}</h5>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );  
}

export default Product;