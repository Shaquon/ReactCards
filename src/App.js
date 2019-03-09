import React from 'react';

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);


const Card = (props) => (
    <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className={`icon fa ${props.icon} card__descriptionIcon`} />
                <div className="card__descriptionText">
                {props.description && <span>{props.description}</span>}
                {props.secondDescription && <React.Fragment><br/>({props.secondDescription})</React.Fragment>}
                </div>
            </div>
            <div className="card__price">{props.price}</div>
    </div>
);



const App = () => (
    <CardGroup className="cardGroup">
        <Card className="card_descriptionText" description="Trial" icon="fa-thumbs-o-up" price="Free" />
        <Card className="card_descriptionText" description="Basic Tier" secondDescription="most popular" icon="fa-trophy" price="$10.00" />
        <Card className="card_descriptionText" description="Advanced Tier" secondDescription="only for enterprise-level proffesionals" icon="fa-bolt" price="$6000.00" />
    </CardGroup>

);

export default App;
