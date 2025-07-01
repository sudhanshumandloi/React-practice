import { useState } from "react";

function Card({id, name, info,Image, price, remove}){

    const [readMore, setReadMore] = useState(false);

    const deascription = readMore ? info : `${info.substring(0, 100)}......`;

    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={Image} alt="babajika thulu" className="image"/>
            <div className="tour-info">
            <div className="tour-details">
                <h3 className="tour-price"> ${price}</h3>
                <h3 className="tour-name">{name}</h3>
            </div>
            <div className="deascription">
                {deascription}
                <span onClick={readMoreHandler} className="read-more">
                    {readMore ? 'show less': 'read more'}
                </span>
            </div>
            </div>
            <button onClick={() => remove(id)} className="btn-red">Not Interested</button>
        </div>
    );
}

export default Card;