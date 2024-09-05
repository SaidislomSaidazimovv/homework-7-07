import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { API_KEY, IMG_URL, TOKEN } from "../hooks/useEnv";
import YouTube from "react-youtube";

const SinglePage = () => {
  const { id } = useParams();
  const [singleData, setSingleData] = useState({});
  const [videos, setVideos] = useState([]);
  const [actors, setActors] = useState([]);

  useEffect(() => {
    useAxios()
      .get(`/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setSingleData(res.data);
      });

    useAxios()
      .get(`/movie/${id}/videos?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setVideos(res.data.results);
      });

    useAxios()
      .get(`/movie/${id}/credits?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        setActors(res.data.crew);
      });
  }, [id]);

  return (
    <div className="flex justify-between mt-10 px-5">
      <div className="w-[30%] overflow-y-auto h-[90vh] space-y-3 p-5 bg-slate-200 rounded-md">
        {actors?.map((item, index) => (
          <div key={index} className="p-3 w-[50%] text-center rounded-md bg-white">
            <img
              className="mx-auto rounded-full"
              src={`${IMG_URL}/${item.profile_path}`}
              alt={item.name}
              width={"70"}
            />
            <h2>{item.name}</h2>
            <p>{item.job}</p>
          </div>
        ))}
      </div>

      <div className="w-[39%] overflow-y-auto h-[90vh] p-5 bg-slate-200 rounded-md">
        <img
          className="rounded-lg"
          src={`${IMG_URL}/${singleData.backdrop_path}`}
          alt={singleData.title}
          width={"100%"}
        />
        <h2 className="font-bold text-[25px] my-5">{singleData.title}</h2>
        <p>{singleData.overview}</p>
      </div>

      <div className="w-[30%] overflow-y-auto h-[90vh] space-y-3 p-5 bg-slate-200 rounded-md">
        {videos.map((item) => (
          <YouTube className="w-full" key={item.id} videoId={item.key} />
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
