import React from 'react'
import Pagination from './Pagination';
import PRODUCTpage from "./PRODUCTpage"
import { useState, useEffect } from 'react';
import Items from "./products.json"

const Location = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  useEffect(() => {
    // Fetch product data from the JSON file
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  return (
    <div>
    <h1>Product lists</h1>
    <PRODUCTpage products={currentProducts} />
   <Pagination
      currentPage={currentPage}
      totalPages={Math.ceil(products.length / productsPerPage)}
      onPageChange={handlePageChange}
   />
   </div>
  )
}

export default Location