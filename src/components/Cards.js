import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className="cards">
            <h1>Tips on booking flights</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="img/img-14.jpg"
                        text="You only live once, but if you do it right, once is enough"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="img/img-10.jpg"
                        text="In three words I can sum up everything I’ve learned about life: it goes on"
                        label="Luxury"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="img/img-11.jpg"
                        text="You only live once, but if you do it right, once is enough"
                        label="Adventure"
                        path="/services"
                        />
                        <CardItem 
                        src="img/img-12.jpg"
                        text="Everything you can imagine is real"
                        label="Luxury"
                        path="/services"
                        />
                        <CardItem 
                        src="img/img-13.jpg"
                        text="To live is the rarest thing in the world. Most people exist, that is all"
                        label="Mystery"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
