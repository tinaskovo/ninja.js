import React from "react";

import Page from "./Page";

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  const pages = Array.from(Array(totalNumberOfPages).keys()).map(
    (pageNumber) => {
      return (
        <Page
          key={pageNumber}
          currentPageNumber={currentPageNumber}
          pageNumber={pageNumber}
          onChange={onChange}
        />
      );
    }
  );

  return pages.length >= 1 ? <ul className="pagination">{pages}</ul> : null;
};

export default Pagination;
