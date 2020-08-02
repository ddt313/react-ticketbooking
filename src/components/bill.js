import React, { useState, useEffect } from 'react'
import '../style/bill.css'

function Bill(props) {  
  const funcList = () => {
    let list = [];
    for (let seat in props.seatsSelected) {
      list.push(<div className="seat-selected text-uppercase mb-1" key={seat}>{seat}</div>);
    }

    return list;
  }

  const funcNumOfSeatsSelected = () => {
    let temp = 0;
    for (let seat in props.seatsSelected) {
      temp++;
    }

    return temp;
  }

  const formatMoney = (money) => {
    var res = "";
    var moneyString = money.toString();
  
    for (var i = 0; i < moneyString.length; i++) {
      res = moneyString[moneyString.length - 1 - i] + res;
      
      if ((i + 1) % 3 == 0) {
        res = "," + res;
      }
    }
  
    if (res[0] == ',') {
      res = res.slice(1, res.length);
    }
  
    return res;
  }

  return (
    <div className="bill mt-5">
      <h4 className="title">Your Selected Seats</h4>
      <div className="bill-selected mt-4">
        <p id="number-of-seats">{funcNumOfSeatsSelected()} Seats</p>
        <section className="d-flex mt-1 flex-wrap">
          {funcList()}
        </section>
      </div>
      <div className="bill-price mt-5 mb-5">
        <div className="row mb-3">
          <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4">
            Ticket Price
          </div>
          <div className="col-6 col-sm-6 col-md-7 col-lg-8 col-xl-8" id="ticket-price">
            {formatMoney(props.priceTicket)} VND
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4">
            Food
          </div>
          <div className="col-6 col-sm-6 col-md-7 col-lg-8 col-xl-8" id="food-price">
            0 VND
          </div>
        </div>
        <div className="row mb-3 pb-3 my-border">
          <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4">
            Discount
          </div>
          <div className="col-6 col-sm-6 col-md-7 col-lg-8 col-xl-8" id="discount">
            10%
          </div>
        </div>
        <div className="row mb-3 mt-4">
          <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4">
            Total
          </div>
          <div className="col-6 col-sm-6 col-md-7 col-lg-8 col-xl-8" id="discount">
            {formatMoney((funcNumOfSeatsSelected() * props.priceTicket + props.foodMoney) * (1 - props.discount / 100))} VND
          </div>
        </div>
      </div>

      <div className="add-food">Add Food</div>
      <div className="buy-ticket">Buy Ticket</div>
    </div>
  );
}

export default Bill;