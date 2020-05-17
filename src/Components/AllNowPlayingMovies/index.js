import React, { useEffect, useState } from "react";
import apikey from "../../api/apiKey";
import List from "./List";
import Loader from "../loader/Loader";
import { NowPlayingWrapper } from "./style";
import axios from "axios";

const AllNowPLayingMovies = () => {
  const [NowPLaying, setNowPlayng] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchNowplayingData = async () => {
      try {
        const nowPlayingData = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=1`,
          {
            cancelToken: source.token,
          }
        );

        setNowPlayng(nowPlayingData.data.results);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log(error);
        }
      }
    };

    fetchNowplayingData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, []);

  return (
    <NowPlayingWrapper>
      {Loading && <Loader />}
      {!Loading && <List movieData={NowPLaying} />}
    </NowPlayingWrapper>
  );
};
export default AllNowPLayingMovies;
