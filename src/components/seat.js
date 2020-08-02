import React, { useState, useEffect } from 'react'

import '../style/seat.css'

function Seat(props) {
  const [classNames, setClassNames] = useState("seat text-uppercase");
  const [checkSelected, setCheckSelected] = useState(false);
  
  useEffect(() => {
    if (props.sold == "1") {
      setClassNames(classNames + " sold");
    }
  },[]);

  function handlefunc() {
    if (props.sold == "1") {
      return;
    }

    if (!checkSelected) {
      setClassNames(classNames + " selected");
    } else {
      setClassNames("seat text-uppercase");
    }

    props.sendDataSeatAndBill(props.name);

    setCheckSelected(!checkSelected);
  }

  return (
    <div className={classNames} onClick={handlefunc}>
      {props.name}
    </div>
  );
}

export default Seat;