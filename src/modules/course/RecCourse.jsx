import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { dataCourse } from "../helper/dataSkill";

const RecCourse = () => {
  const [searchTerm, setSearch] = useState("");
  const filterData = dataCourse.filter((item) => {
    const matchSearch = item.headtitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchSearch;
  });
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="row my-3">
      <div className="d-flex flex-row align-items-center justify-content-start ">
        <span
          style={{ width: "80px", height: "1px" }}
          className="border border-1 border-dark me-3"
        ></span>
        <p className=" fs-1 fw-bold">Recommendation Courses</p>
      </div>
      <div className="row">
        {" "}
        <div className="d-flex justify-content-end">
          <button className="btn btn-light d-flex align-items-center">
            <CiSearch className="fs-1 text-dark" />
            <input
              type="search"
              className="form-control border border-0 mx-3"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search Course"
            />
          </button>
        </div>
      </div>
      <div className="row my-4 m-auto px-2">
        {filterData.map((items) => {
          return (
            <div className="col-md-6 my-3 " key={items.id}>
              <div
                className="card  border border-0 overflow-hidden rounded-5 text-center"
                style={{
                  height: "100%",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                {" "}
                <span
                  style={{ width: "25%" }}
                  class="badge text-bg-dark ms-4 mt-3 rounded-4 p-2 m-auto text-uppercase "
                >
                  {items.headtitle}
                </span>
                <div className="card-body">
                  <p className="fs-5 fw-bold">{items.title}</p>
                  <div class="ratio ratio-16x9">
                    <iframe
                      className="card_hover"
                      width="560"
                      height="315"
                      src={items.imgCourse}
                      title="YouTube video "
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecCourse;
