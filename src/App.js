import { useEffect, useState } from "react";
import ProductCard from "./card";
import { page_size } from "./constants";
import Pagination from "./pagination";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const totalProducts = products.length;

  const numberOfPages = Math.ceil(totalProducts / page_size);
  const start = currentPage * page_size;
  const end = start + page_size;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=300");
    const json = await data.json();
    setProducts(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (n) => {
    setCurrentPage(n);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return !products.length ? (
    "No Products Found"
  ) : (
    <div className="App">
      <h2>Pagination</h2>

      <div className="product-container">
        {products.slice(start, end).map((p) => (
          <ProductCard image={p.thumbnail} title={p.title} key={p.id} />
        ))}
      </div>
      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        numberOfPages={numberOfPages}
      />
    </div>
  );
}
