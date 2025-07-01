import React from "react";

import ProductDate from "./ProductDate";
import "./ProductItem.css";
import Card from './Card';
import { useState } from "react";


const ProductItem = (props) =>{


    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('rarau');
        console.log('Clicked on me');
    }
    return (
        <Card className = 'product_item'>
            <ProductDate date={props.date}/>
            <div className="product-item__deascription">
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Click me</button>
        </Card>
    )
}
    
export default ProductItem;