import React from "react";
import Navbar from "./Navbar.jsx";
//include images into your bundle
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {
	const card = [
		{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUab3p1h5qGvJ-_GSwcuEnaf2Ht9VIUem4z9uOS09NGw&s",title:"carta1", parrafo:"parrafo1"},
		{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDADUKCsdEclREq2RGW7ABYTi5Q2y36jB7B34wngx1A&s",title:"carta2", parrafo:"parrafo2"},
		{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hhP8qLJ5aBH4RynhJHXnMuqI7E6-1teaBKrPjgarIQ&s",title:"carta3", parrafo:"parrafo3"},
		{imagen:"https://pbs.twimg.com/profile_images/1188507013233479681/WuNwaQ8R_400x400.jpg", title:"carta4", parrafo:"parrafo4"}
		];
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div>
				<div>
					{card.map((item,index)=>{
						return(
							<Card key={index} imagen={item.imagen} title={item.title} parrafo={item.parrafo}/>
						)
					})}
				
				</div>
			</div>
			
			<Footer/>
		</div>
	);
};

export default Home;
