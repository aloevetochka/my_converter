import "./Pagination.css";

import { useState } from "react";

interface IPagination {
  ratesPerPage: number;
  totalRates: number;
  paginate(number: number): void;
}

function Pagination({ ratesPerPage, totalRates, paginate }: IPagination) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRates / ratesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex justify-content-center mt-2 pagination">
      {pageNumbers.map((number) => (
        <div className="page-btn-container" key={number}>
          <button
            id={number.toString()}
            className="shadow-none page-btn"
            onClick={() => {
              paginate(number);

              document
                .getElementsByClassName("activePage")[0]
                ?.classList.remove("activePage");

              document
                .getElementById(number.toString())
                ?.classList.add("activePage");
            }}
          >
            {number}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
