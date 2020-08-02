import React from 'react'

import '../style/food-item.css'

function FoodItem(props) {
  const formatMoney = (money) => {
    var res = "";
    var moneyString = "" + money;

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
    <div className="food-item">
      <div className="card">
        <div className="card-header img-food">
          <img className="card-img-top" src={props.img} alt="Food 01 Bap rang bo" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{props.title}</h4>
          <div className="row">
            <div className="col-12">
              <p className="card-text">Gia: {formatMoney(props.price)} VND</p>
            </div>
            <div className="col-12">
              <input className="form-control" type="number" name="num-food" id="num-food" placeholder="So luong" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;