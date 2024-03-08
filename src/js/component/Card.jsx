import React from "react";
import { ProgressPlugin } from "webpack";

//include images into your bundle



//create your first component
const Card  = (props) => {
	return (
		<div>
			<div class="card" style={{width: "18rem"}}>
  <img src={props.imagen} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.parrafo}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
		</div>
	);
};

export default Card;