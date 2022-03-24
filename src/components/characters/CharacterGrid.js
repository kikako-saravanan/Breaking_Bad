import React, { useState } from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
import Pagination from "../Pagination";

const CharacterGrid = ({ items, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(8);

  //get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage = items.slice(indexOfFirstImage, indexOfLastImage);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="parent-container">
      <section className="cards">
        {currentImage.map((item) => (
          //key must be unique,using map it creates a list
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
        <Pagination
          imagesPerPage={imagesPerPage}
          totalImages={items.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
};

export default CharacterGrid;
