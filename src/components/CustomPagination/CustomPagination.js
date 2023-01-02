import React from "react";
import { Pagination } from "react-bootstrap";

const CustomPagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const firstPage = () => {
     setCurrentPage(1);
  };
  const lastPage = () => {
    setCurrentPage(nPages);
  };

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Pagination>
      <Pagination.First onClick={firstPage}/>
      <Pagination.Prev onClick={prevPage} />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={nextPage} />
      <Pagination.Last onClick={lastPage}/>
    </Pagination>
  );
};

export default CustomPagination;
