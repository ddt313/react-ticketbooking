import React from 'react'

import Seat from './seat'

function Seats(props) {
  let numberCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let charRow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  const listSeats = charRow.map((char) => {
    return numberCol.map((num) => {
      if (props.seatsSold[char + num] == "1") {
        return <div className="col-1 mt-2" key={char + num}><Seat sendDataSeatAndBill={props.sendDataSeatAndBill} sold="1" name={char + num} /></div>;
      } else {
        return <div className="col-1 mt-2" key={char + num}><Seat sendDataSeatAndBill={props.sendDataSeatAndBill} name={char + num} /></div>;
      }
    });
  });

  // console.log(listSeats);
  
  return (
    <div className="seats">
      <div className="form-row">
        {listSeats}
      </div>
      {/* <div className="form-row">
        {listSeats[1]}
      </div>
      <div className="form-row">
        {listSeats[2]}
      </div> */}
      {/* <div className="form-row mb-2">
        <div className="col-1">
          <Seat name="a1" />
        </div>
        <div className="col-1">
          <Seat name="a2" />
        </div>
        <div className="col-1">
          <Seat name="a3" />
        </div>
        <div className="col-1">
          <Seat class="sold" name="a4" />
        </div>
        <div className="col-1">
          <Seat name="a5" />
        </div>
        <div className="col-1">
          <Seat name="a6" />
        </div>
        <div className="col-1">
          <Seat name="a7" />
        </div>
        <div className="col-1">
          <Seat name="a8" />
        </div>
        <div className="col-1">
          <Seat name="a9" />
        </div>
        <div className="col-1">
          <Seat name="a10" />
        </div>
        <div className="col-1">
          <Seat name="a11" />
        </div>
        <div className="col-1">
          <Seat name="a12" />
        </div>
      </div>
      <div className="form-row">
        <div className="col-1">
          <Seat name="b1" />
        </div>
        <div className="col-1">
          <Seat name="b2" />
        </div>
        <div className="col-1">
          <Seat name="b3" />
        </div>
        <div className="col-1">
          <Seat name="b4" />
        </div>
        <div className="col-1">
          <Seat name="b5" />
        </div>
        <div className="col-1">
          <Seat name="b6" />
        </div>
        <div className="col-1">
          <Seat name="b7" />
        </div>
        <div className="col-1">
          <Seat name="b8" />
        </div>
        <div className="col-1">
          <Seat name="b9" />
        </div>
        <div className="col-1">
          <Seat name="b10" />
        </div>
        <div className="col-1">
          <Seat name="b11" />
        </div>
        <div className="col-1">
          <Seat name="b12" />
        </div>
      </div> */}
    </div>
  );
}

export default Seats;