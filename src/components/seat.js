import React, { useState, useEffect } from 'react'

import '../style/seat.css'

function Seat(props) {
  const [classNames, setClassNames] = useState("seat text-uppercase my-text");
  const [checkSelected, setCheckSelected] = useState(false);
  
  useEffect(() => {
    if (props.sold == "1") {
      setClassNames(classNames + " sold");
    }
  },[]);

  function handleSelectSeat() {
    if (props.sold == "1") {
      return;
    }

    if (!checkSelected) {
      setClassNames(classNames + " selected");
    } else {
      setClassNames("seat text-uppercase my-text");
    }

    props.sendDataSeatAndBill(props.name);

    setCheckSelected(!checkSelected);
  }

  return (
    <div className={classNames} onClick={handleSelectSeat}>
      {props.name}
    </div>
  );
}

export default Seat;