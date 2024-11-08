import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { dataCourse } from "../helper/dataSkill";
import CustomSearch from "../widget/CustomSearch";
import CustomFlipCard from "../widget/CustomFlipCard";

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
    <div className="row my-5">
      <div className="d-flex flex-row align-items-center justify-content-start">
        <span
          style={{ width: "80px", height: "1px" }}
          className="border border-1 border-dark me-3"
        ></span>
        <p className=" fs-1 fw-bold">Recommendation Courses</p>
      </div>
      <div className="row">
        {" "}
        <div className="d-flex justify-content-end">
            <CustomSearch handleSearch={handleSearch} searchTerm={searchTerm}/>
        </div>
      </div>
      <div className="row my-4 m-auto px-2">
        {filterData.map((items) => {
          return (
            <div className="col-md-6 my-3" key={items.id}>
              <div data-aos="zoom-in-down"
                className="card border border-0 overflow-hidden rounded-5 text-center"
                style={{
                  height: "100%",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                {" "}
                <span className="mt-2 ms-4">
                    <p className="badge text-bg-dark rounded-4 text-uppercase p-2 float-start">{items.headtitle}</p>
                </span>
                              <div className="card-body">
                                  <p className="fs-6 fw-bold">{items.title}</p>
                                  <div className="ratio ratio-16x9">
                                      <iframe
                                          allowFullScreen={true}
                                          className=""
                                          width="560"
                                          height="315"
                                          src={items.imgCourse}
                                          title="YouTube video"
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
