import React from "react";
import "./style.scss";

var CardContainer = props => {
  //   render: function() {
  var cards = [];
  for (var i = 1; i <= props.numCards; i += 1) {
    cards.push(<CardItem idNum={i} />);
  }
  return <div className="card-flex">{cards}</div>;
  //   }
};

var CardItem = props => {
  //   render: function() {
  return <div id={"card-" + props.idNum} className="card-flex-item"></div>;
  //   }
};

var CardContent = props => {
  //   render: function() {
  return (
    <div className="card-flex-wrapper">
      <div className="card-flex-image">
        <img src={props.imgSrc} alt="img placeholder" />
      </div>
      <div className="card-flex-content">
        <h3>{props.headerText}</h3>
        <p>{props.description}</p>
        <a href={props.url} className="card-flex-button btn-block">
          Button
        </a>
      </div>
    </div>
  );
  //   }
};

const Cards = () => {
  return (
    <div id="card">
      <div className="card-flex">
        {/* <CardContainer numCards={5} /> */}
        <CardContent
          imgSrc="https://m.media-amazon.com/images/M/MV5BNTFkNzU3MjEtZjFlMC00OTM3LWE2ZjUtZjViMzk5YjQxYWQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg"
          headerText="One"
          description="I'm a card and I'm first"
          url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout"
        />
        <CardContent
          imgSrc="https://m.media-amazon.com/images/M/MV5BNTFkNzU3MjEtZjFlMC00OTM3LWE2ZjUtZjViMzk5YjQxYWQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg"
          headerText="One"
          description="I'm a card and I'm first"
          url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout"
        />
        <CardContent
          imgSrc="https://m.media-amazon.com/images/M/MV5BNTFkNzU3MjEtZjFlMC00OTM3LWE2ZjUtZjViMzk5YjQxYWQ3XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL50_SY1000_CR0,0,691,1000_AL_.jpg"
          headerText="One"
          description="I'm a card and I'm first"
          url="https://chriswrightdesign.com/experiments/using-flexbox-today/#card-layout"
        />
      </div>
    </div>
  );
};

export default Cards;
