import React from 'react'

import '../style/foods.css'


import FoodItem from './food-item'


function Foods(props) {
  const foods = props.foods;

  const listFoods = foods.map((food, index) => {
    return (
      <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={index}>
        <FoodItem
          id={food.id}
          img={food.link}
          title={food.title}
          price={food.price}
          funcHandleSelectFood={props.funcHandleSelectFood}
        />
      </div>
    );
  });

  return (
    <div className="foods">
      <div className="row justify-content-center mx-0">
        <div className="col-10 d-flex justify-content-center">
          <h3 className="title">Food and Drink</h3>
        </div>
        <div className="col-2 d-flex justify-content-end pr-0">
          <div onClick={props.funcShowFood} className="btn btn-apply-food">Close</div>
        </div>
      </div>
      <div className="row">
        {listFoods}        
      </div>
    </div>
  );
}

export default Foods;