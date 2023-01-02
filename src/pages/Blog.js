import React, { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import { Container, Row, Col } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import CustomPagination from "../components/CustomPagination/CustomPagination";
import { blogArr } from "../data/blogData";

const Blog = () => {
  // User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  // No of Records to be displayed on each page
  const [recordsPerPage] = useState(4);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = blogArr.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(blogArr.length / recordsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Row className="my-5">
        <h1 className="text-center text-primary">Featured Posts</h1>
      </Row>
      <Row className="gx-5">
        {currentRecords.map(({ img, title, date, text }, idx) => (
          <Col key={idx} lg={6} className="my-3">
            <BlogCard img={img} title={title} date={date} text={text} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <CustomPagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
