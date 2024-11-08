import React from 'react';
import {CiSearch} from "react-icons/ci";

const CustomSearch = ({searchTerm,handleSearch}) => {
    return (
        <button className="btn d-flex align-items-center border-0 border-bottom">
            <CiSearch className="fs-1 text-dark"/>
            <input
                type="search"
                className="form-control border border-0 mx-3 no-focus border-0"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search Course"
            />
        </button>
    );
};

export default CustomSearch;