import { useState } from "react";

import CurrentPage from "./CurrentPage";
import Pagination from "./Pagination";

interface IRatesList {
  allRates: any;
  loading: boolean;
}

function RatesList({ loading, allRates }: IRatesList) {
  const [pageNumber, setPageNumber] = useState(1);
  const [ratesPerPage] = useState(13);

  const filteredRates = Object.entries(allRates);

  const baseValue = allRates["RUB"];

  const lastRateIndex = pageNumber * ratesPerPage;
  const firstRateIndex = lastRateIndex - ratesPerPage;
  const currentPage = filteredRates.slice(firstRateIndex, lastRateIndex);
  const paginate = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  return (
    <>
      <CurrentPage
        loading={loading}
        baseValue={baseValue}
        currentPage={currentPage}
      />
      <Pagination
        ratesPerPage={ratesPerPage}
        totalRates={filteredRates.length}
        paginate={paginate}
      />
    </>
  );
}

export default RatesList;
