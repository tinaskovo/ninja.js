import React, { useState } from "react";

import Pagination from "./Pagination";
import Row from "./Row";
import Search from "./Search";

const DataTable = ({ initialRows, rowsPerPage = 40 }) => {
  const [rows, setRows] = useState(initialRows);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const calculateTotalNumberOfPages = (rows) => {
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  };

  const [totalNumberOfPages, setTotalNumberOfPages] = useState(
    calculateTotalNumberOfPages(initialRows)
  );

  const search = (event) => {
    const text = event.target.value;
    let rowsFound = initialRows;

    if (text) {
      rowsFound = initialRows.filter(
        (row) =>
          row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
          (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      );
    }

    setRows(rowsFound);
    setCurrentPageNumber(0);
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound));
  };

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage;
    return [startIndex, startIndex + rowsPerPage];
  };

  const rowsToRender = rows
    .map((row) => <Row key={row.per_id} row={row} />)
    .slice(...rowsInPageNumber(currentPageNumber));

  return (
    <div>
      <Search onSearch={(event) => search(event)} />
      <table>
        <tbody>{rowsToRender}</tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={(pageNumber) => changeToPageNumber(pageNumber)}
      />
    </div>
  );
};

export default DataTable;
