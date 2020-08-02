import React, { useState, useEffect } from 'react';
import './App.css';

import thumb from './images/thumb-avengers.jpg'
import img_food01_brb from './images/food01-brb.jpg'
import img_food02_cccl from './images/food02-cccl.jpg'
import img_food03_ktc from './images/food03-cbs1.jpg'
import img_food04_ktc_d from './images/food04-ktc-d.jpg'
import img_food05_gakfc from './images/food05-gakfc.jpg'

import MovInfor from './components/mov-infor'
import TimeLocation from './components/time-location'
import Bill from './components/bill'
import Seats from './components/seats'
import Screen from './components/screen'
import Annotation from './components/annotation'
import Foods from './components/foods'

function App() {

  // data film : thông tin film lấy ra từ database
  const film = {
    id: "film01",
    title: "Avengers Film Abdjads Xsdjf",
    thumb: thumb,
    imdb: "8.9/10",
    duration: "2h 30min",
    trailer: "link"
  };

  // data time - cinema: những rạp và khung giờ chiếu của film
  const times = [
    "9:30 AM",
    "1:00 PM",
    "3:30 PM",
    "4:30 PM",
    "8:15 PM"
  ];

  const cinemas = [
    "Cinema Hai Chau",
    "Cinema Hoa Khanh",
    "Cinema Ngu Hanh Son",
    "Cinema Galaxy"
  ];

  // data seats sold : những ghế đã được bán
  const seatsSold = {
    "a1": 1,
    "a2": 1,
    "a3": 1,
    "b4": 1
  };
  const [seatsSelected, setSeatsSelected] = useState({});

  // data food - drink: 
  const foods = [
    {
      id: "food-01",
      title: "Bắp Rang Bơ",
      link: img_food01_brb,
      price: 20000
    },
    {
      id: "food-02",
      title: "Coca Cola",
      link: img_food02_cccl,
      price: 15000
    },
    {
      id: "food-03",
      title: "Combo Ship 1",
      link: img_food03_ktc,
      price: 55000
    },
    {
      id: "food-04",
      title: "Khoai Tây Chiên",
      link: img_food04_ktc_d,
      price: 20000
    },
    {
      id: "food-05",
      title: "Gà KFC",
      link: img_food05_gakfc,
      price: 19000
    }
  ];

  // data khác của Bill
  const priceTicket = 70000;
  const discount = 10;

  // biến sử dụng trong ứng dụng
  const [foodSelected, setFoodSelected] = useState([]);
  const [showFood, setShowFood] = useState("d-none");
  const [foodMoney, setFoodMoney] = useState(0);

  useEffect(() => {
    calcFoodMoney();
  }, [foodSelected])


  const sendDataSeatAndBill = (dataSeat) => {
    let copySeatsSelected = {};
    for (let seat in seatsSelected) {
      copySeatsSelected[seat] = 1;
    }
    if (copySeatsSelected[dataSeat]) {
      delete copySeatsSelected[dataSeat];
    } else {
      copySeatsSelected[dataSeat] = 1;
    }

    setSeatsSelected(copySeatsSelected);
  }

  const funcShowFood = () => {
    if (showFood == "d-none") {
      setShowFood("");
    } else {
      setShowFood("d-none");
    }
  }

  const funcHandleSelectFood = (food) => {
    let foodsTemp = [];
    for (let i = 0; i < foodSelected.length; i++) {
      foodsTemp[i] = Object.assign({}, foodSelected[i]);
    }

    let check = false;
    for (let i = 0; i < foodsTemp.length; i++) {
      if (foodsTemp[i].id == food.id) {
        if (food.quantity > 0) {
          foodsTemp[i].quantity = parseInt(food.quantity);
        } else {
          foodsTemp[i].quantity = 0;
        }
        check = true;
        break;
      }
    }

    if (!check) {
      foodsTemp[foodsTemp.length] = {};
      foodsTemp[foodsTemp.length - 1].id = food.id;
      foodsTemp[foodsTemp.length - 1].price = food.price;
      foodsTemp[foodsTemp.length - 1].quantity = parseInt(food.quantity);
    }

    setFoodSelected(foodsTemp);
  }

  const calcFoodMoney = () => {
    let moneyFoodTemp = 0;
    for (let i = 0; i < foodSelected.length; i++) {
      moneyFoodTemp += foodSelected[i].quantity * foodSelected[i].price;
    }
    setFoodMoney(moneyFoodTemp);
  }

  // hàm Render
  return (
    <div className="App">
      <header className="header">header</header>
      <MovInfor film={film} />
      <div className="row mb-5 main-time-loca">
        <TimeLocation times={times} cinemas={cinemas} />
      </div>
      <div className="container">
        <div className="row">
          <div className="order-col-2 order-sm-2 order-md-2 order-lg-1 order-xl-1 col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mx-auto">
            <Bill
              seatsSelected={seatsSelected}
              priceTicket={priceTicket}
              foodMoney={foodMoney}
              discount={discount}
              foodSelected={foodSelected}
              funcShowFood={funcShowFood}
            />
          </div>
          <div className="order-col-1 order-sm-1 order-md-1 order-lg-2 order-xl-2 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="row justify-content-end">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <Annotation />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Screen />
              </div>
            </div>
            <Seats seatsSold={seatsSold} sendDataSeatAndBill={sendDataSeatAndBill} />
          </div>
        </div>
      </div>
      <div id="app-food" className={"container mt-4 " + showFood}>
        <Foods
          foods={foods}
          funcShowFood={funcShowFood}
          funcHandleSelectFood={funcHandleSelectFood}
        />
      </div>

      <div className="footer">footer</div>
    </div>
  );
}

export default App;
