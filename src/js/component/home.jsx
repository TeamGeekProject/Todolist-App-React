import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 d-flex justify-content-center my-2 todos ">
          todos
        </div>
      </div>
      <div className="row justify-content-center things-to-do">
        <div className="col-12 d-flex justify-content-center">
          <div className="items bg-primary  bg-white shadow-lg border-end-0 border">
            Make the bed
          </div>
          <span className="bg-white to-close border-start-0 border">
            <i class="fa-solid fa-xmark text-danger"></i>
          </span>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <div className="items bg-primary  bg-white shadow-lg border-end-0 border">
            Make the bed
          </div>
          <span className="bg-white to-close border-start-0 border">
            <i class="fa-solid fa-xmark text-danger"></i>
          </span>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <div className="show-amount   bg-white shadow-lg ">1 item left</div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12  d-flex justify-content-center ">
          <div className="botton-structure-1  bg-white shadow-lg border border-1"></div>
        </div>
        <div className="col-12  d-flex justify-content-center ">
          <div className="botton-structure-2  bg-white shadow-lg border border-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
