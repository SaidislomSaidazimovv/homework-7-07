import React, { useEffect, useState } from 'react'
import { useAxios } from './../hooks/useAxios';
import { API_KEY, TOKEN } from '../hooks/useEnv';
import MovieCard from '../components/MovieCard';
import MoviePagination from '../components/MoviePagination';

const TopRated = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [movieData, setMovieData] = useState([])

  useEffect(() => {
    useAxios().get(`/movie/top_rated?language=en-US&page=${page}?api_key=${API_KEY}`, {
      headers: {
        "Authorization":`Bearer ${TOKEN}`
      }
    })
    .then(res => {
      setMovieData(res.data.results);
      setTotalPages(res.data.total_pages)
    })
  }, [page])

  return (
    <div className='flex flex-wrap justify-center gap-8 mt-10'>
      {movieData.map(item => <MovieCard key={item.id} item={item} /> )}
      <MoviePagination setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default TopRated