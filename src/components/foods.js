import React from 'react'

import '../style/foods.css'
import img_food01_brb from '../images/food01-brb.jpg'
import img_food02_cccl from '../images/food02-cccl.jpg'
import img_food03_ktc from '../images/food03-ktc.jpg'
import img_food04_ktc_d from '../images/food04-ktc-d.jpg'
import img_food05_gakfc from '../images/food05-gakfc.jpg'

import FoodItem from './food-item'


function Foods() {
  const foods = [
    {
      link: img_food01_brb,
      price: 20000
    },
    {
      link: img_food02_cccl,
      price: 15000
    },
    {
      link: img_food03_ktc,
      price: 55000
    },
    {
      link: img_food04_ktc_d,
      price: 20000
    },
    {
      link: img_food05_gakfc,
      price: 50000
    }
  ];

  return (
    <div className="foods">
      <div className="row justify-content-center mx-0">
        <div className="col-10 d-flex justify-content-center">
          <h3 className="title">Food and Drink</h3>
        </div>
        <div className="col-2 d-flex justify-content-end pr-0">
          <div className="btn btn-apply-food">Apply</div>
        </div>
      </div>
      <div className="row">
        <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <FoodItem img={foods[0].link} title={"Bap Rang Bo"} price={foods[0].price} />
        </div>
        <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <FoodItem img={foods[1].link} title={"Coca Cola"} price={foods[1].price} />
        </div>
        <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <FoodItem img={foods[2].link} title={"Combo Ship 1"} price={foods[2].price} />
        </div>
        <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <FoodItem img={foods[3].link} title={"Khoai Tay Chien"} price={foods[3].price} />
        </div>
        <div className="mt-3 col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
          <FoodItem img={foods[4].link} title={"Ga KFC"} price={foods[4].price} />
        </div>
      </div>
    </div>
  );
}

export default Foods;