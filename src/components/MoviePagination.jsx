import React from "react";
import { Pagination } from "@mui/material";

const MoviePagination = ({setPage, totalPages}) => {
  const handleChangePagination = (event, value) => {
    setPage(value);
  };

  return (
    <div className="text-center py-5">
      <Pagination
        onChange={handleChangePagination}
        count={totalPages}
        showFirstButton
        showLastButton
      />
    </div>
  );
};

export default MoviePagination;
