import React from "react";
import { Route, Routes } from "react-router-dom";
import { NowPlaying, Popular, SinglePage, TopRated, UpComing } from "../pages";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<NowPlaying />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/top-rated" element={<TopRated />} />
      <Route path="/up-coming" element={<UpComing />} />
      <Route path="/:id" element={<SinglePage />} />
    </Routes>
  );
};

export default index;
