const Pagination = ({
  goToNextPage,
  goToPrevPage,
  handlePageChange,
  currentPage,
  numberOfPages,
}) => {
  return (
    <div className="pagination-container">
      <button
        type="button"
        className="page-number"
        onClick={() => goToPrevPage()}
        disabled={currentPage === 0}
      >
        <svg
          fill="#000000"
          height="14px"
          width="14px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g data-name="Layer 2">
              {" "}
              <g data-name="arrow-ios-back">
                {" "}
                <rect
                  width="24"
                  height="24"
                  transform="rotate(90 12 12)"
                  opacity="0"
                ></rect>{" "}
                <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
      {[...Array(numberOfPages).keys()].map((n) => (
        <span
          className={"page-number " + (n === currentPage ? "active-page" : "")}
          key={n}
          onClick={() => {
            handlePageChange(n);
          }}
        >
          {n}
        </span>
      ))}
      <button
        type="button"
        className="page-number"
        onClick={() => goToNextPage()}
        disabled={currentPage === numberOfPages - 1}
      >
        <svg
          fill="#000000"
          height="14px"
          width="14px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g data-name="Layer 2">
              {" "}
              <g data-name="arrow-ios-forward">
                {" "}
                <rect
                  width="24"
                  height="24"
                  transform="rotate(-90 12 12)"
                  opacity="0"
                ></rect>{" "}
                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
