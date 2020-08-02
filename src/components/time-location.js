import React from 'react'

import '../style/time-location.css'

function TimeLocation(props) {
  const {times, cinemas} = props;

  const listTime = times.map((time, index) => {
    return <option className="item-option" value={"time" + index} key={index}>{time}</option>
  });

  const listCinema = cinemas.map((cinema, index) => {
    return <option className="item-option" value={"cinema" + index} key={index}>{cinema}</option>
  });

  return (
    <div className="container">
      <div className="row time-location">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-date">
          <input type="date" name="date" id="date" />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-time">
          <select name="time" id="time">            
            {listTime}            
          </select>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-cinema">
          <select name="cinema" id="cinema">
            {listCinema}            
          </select>
        </div>
      </div>
    </div>
  );
}

export default TimeLocation;