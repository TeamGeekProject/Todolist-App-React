import React from "react";
import TasksAndInput from "./tasksAndInput.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <>
		<div>
		  <TasksAndInput />
		</div>
	  </>
	);
  };
  
  export default Home;

