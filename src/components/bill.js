import React, { useState, useEffect } from 'react'
import '../style/bill.css'

function Bill(props) {

  // tạo ra danh sách ghế  đã được chọn
  const funcList = () => {
    let list = [];
    for (let seat in props.seatsSelected) {
      list.push(<div className="seat-selected text-uppercase mb-1" key={seat}>{seat}</div>);
    }

    return list;
  }

  // số lượng ghế được chọn
  const funcNumOfSeatsSelected = () => {
    let temp = 0;
    for (let seat in props.seatsSelected) {
      temp++;
    }

    return temp;
  }  

  // format thành dạng money
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
            Ticket
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
            {formatMoney(props.foodMoney)} VND
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
            {formatMoney(Math.round((funcNumOfSeatsSelected() * props.priceTicket + props.foodMoney) * (1 - props.discount / 100) / 1000) * 1000)} VND
          </div>
        </div>
      </div>

      <a href="#app-food" className="btn add-food" onClick={props.funcShowFood}>Add Food</a>
      <div className="buy-ticket pt-1">Buy Ticket</div>
    </div>
  );
}

export default Bill;