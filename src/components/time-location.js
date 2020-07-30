import React from 'react'

import '../style/time-location.css'

function TimeLocation() {
  return(
    <div className="container">
      <div className="row time-location">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-date">
          <input type="date" name="date" id="date" />
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-time">
          <select name="time" id="time">
            <option className="item-option" value="time1">9:30 AM</option>
            <option className="item-option" value="time2">1:00 PM</option>
            <option className="item-option" value="time3">3:30 PM</option>
            <option className="item-option" value="time4">4:30 PM</option>
            <option className="item-option" value="time5">8:30 PM</option>
          </select>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 select-cinema">
          <select name="cinema" id="cinema">
            <option className="item-option" value="cinema1">Cinema Hai Chau</option>
            <option className="item-option" value="cinema2">Cinema Hoa Khanh</option>
            <option className="item-option" value="cinema3">Cinema Ngu Hanh Son</option>
            <option className="item-option" value="cinema4">Cinema Galaxy</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TimeLocation;