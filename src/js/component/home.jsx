import React from "react";
import Navbar from "./Navbar.jsx";
//include images into your bundle
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Footer from "./Footer.jsx";
const Card = [
{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUab3p1h5qGvJ-_GSwcuEnaf2Ht9VIUem4z9uOS09NGw&s",title="carta1", parrafo="parrafo1"},
{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDADUKCsdEclREq2RGW7ABYTi5Q2y36jB7B34wngx1A&s",title="carta2", parrafo="parrafo2"},
{imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2hhP8qLJ5aBH4RynhJHXnMuqI7E6-1teaBKrPjgarIQ&s",title="carta3", parrafo="parrafo3"},
{imagen:"https://pbs.twimg.com/profile_images/1188507013233479681/WuNwaQ8R_400x400.jpg", title="carta4", parrafo="parrafo4"}
]
//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
