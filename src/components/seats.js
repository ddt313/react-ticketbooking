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

  return (
    <div className="seats">
      <div className="form-row">
        {listSeats}
      </div>
    </div>
  );
}

export default Seats;