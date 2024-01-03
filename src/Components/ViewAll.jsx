import React, { useState } from "react";
import Header from "./Header";

const ViewAll = () => {
  const [data, changeData] = useState([
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
    { image: "", recipeName: "sdd", cuisineType: "fgghg" },
  ]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4  d-flex allign-items-stretch">
                    <div className="card">
                      <img
                        src={}
                        className="card-img-top"
                        alt="Recipe image"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{value.recipeName}</h5>
                        <p className="card-text">{value.cuisineType}</p>
                        <a href="#" className="btn btn-primary">
                          More Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
