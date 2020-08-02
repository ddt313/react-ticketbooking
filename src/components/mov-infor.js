import React from 'react'
import '../style/mov-infor.css'

import '../../node_modules/font-awesome/css/font-awesome.min.css'


function MovInfor({ film }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3 thumb-pic">
          <img src={film.thumb} alt="thumb avengers" />
        </div>

        <div className="col-6 col-sm-6 col-md-6 col-lg-8 col-xl-9 thumb-content">
          <div className="title">
            <h2>{film.title}</h2>
          </div>

          <div className="detail">
            <div className="row diff-flex">
              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2 imdb">
                <i className="fa fa-imdb fa-2x imdb-icon"></i>
                <p>{film.imdb}</p>
              </div>

              <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-2 duration">
                <i className="fa fa-clock-o fa-2x clock-icon" aria-hidden="true"></i>
                <p>{film.duration}</p>
              </div>
            </div>

            <div className="row" id="trailer">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
                <a href={film.trailer} className="watch-trailer">Watch Trailer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovInfor;