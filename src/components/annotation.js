import React from 'react'

import '../style/annotation.css'

function Annotation() {
  return (
    <div className="row annotation">
      <div className="col-4 d-flex">
        <div className="seat-anno mr-2">
        </div>
        <p>Available</p>
      </div>
      <div className="col-4 d-flex">
        <div className="seat-anno selected mr-2">
        </div>
        <p>Selected</p>
      </div>
      <div className="col-4 d-flex">
        <div className="seat-anno sold mr-2">
        </div>
        <p>Sold</p>
      </div>


    </div>
  );
}

export default Annotation;