import React, {useState} from 'react';
import './App.css';

import MovInfor from './components/mov-infor'
import TimeLocation from './components/time-location'
import Bill from './components/bill'
import Seats from './components/seats'
import Screen from './components/screen'
import Annotation from './components/annotation'

function App() {
  let seatsSold = {
    "a1": 1,
    "a2": 1,
    "a3": 1,
    "b4": 1
  };

  const priceTicket = 150000;
  let foodMoney = 0;
  const discount = 10;

  const [seatsSelected, setSeatsSelected] = useState({});
  
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

  return (
    <div className="App">
      <header className="header">
      </header>
      <MovInfor />
      <div className="row mb-5 main-time-loca">
        <TimeLocation />
      </div>
      <div className="container">
        <div className="row">
          <div className="order-col-2 order-sm-2 order-md-2 order-lg-1 order-xl-1 col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mx-auto">
            <Bill seatsSelected={seatsSelected} priceTicket={priceTicket} foodMoney={foodMoney} discount={discount} />
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
    </div>
  );
}

export default App;
