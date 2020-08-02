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

  // hàm xử lý khi chọn food - drink
  const hanleChangeFood = (e) => {
    if (e.target.value < 0) {
      e.target.value = 0;
    } else {
      props.funcHandleSelectFood({
        id: props.id,
        price: props.price,
        quantity: e.target.value
      });
    }
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
              <p className="card-text">Giá: {formatMoney(props.price)} VND</p>
            </div>
            <div className="col-12">
              <input
                className="form-control"
                onChange={hanleChangeFood}
                type="number"
                name="num-food"
                id="num-food"
                placeholder="Số lượng"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;