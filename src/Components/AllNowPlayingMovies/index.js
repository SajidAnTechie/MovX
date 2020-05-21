import React, { useEffect, useState } from "react";
import apikey from "../../api/apiKey";
import List from "./List";
import Loader from "../loader/Loader";
import Button from "../../utilis/Button";
import { Pagination } from "../../utilis/style";
import ErrorPage from "../errorPages";
import { NowPlayingWrapper } from "./style";
import axios from "axios";

const AllNowPLayingMovies = () => {
  const [NowPLaying, setNowPlayng] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  const [active_page, setactive_page] = useState(1);
  const [total_page, settotal_page] = useState("");
  const [total_results, settotal_results] = useState("");

  useEffect(() => {
    setLoading(true);
    let source = axios.CancelToken.source();
    const fetchNowplayingData = async () => {
      try {
        const nowPlayingData = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=en-US&page=${active_page}`,
          {
            cancelToken: source.token,
          }
        );

        setNowPlayng(nowPlayingData.data.results);
        settotal_page(nowPlayingData.data.total_pages);
        settotal_results(nowPlayingData.data.total_results);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setError(error);
        }
      }
    };

    fetchNowplayingData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, [active_page]);

  const handleNext = () => {
    if (active_page < total_page) {
      setactive_page(active_page + 1);
    }
  };

  const handlePrevios = () => {
    if (active_page !== 1) setactive_page(active_page - 1);
  };

  return (
    <React.Fragment>
      {Error && <ErrorPage />}
      {Loading && <Loader />}
      {!Loading && (
        <NowPlayingWrapper>
          <List movieData={NowPLaying} totalResults={total_results} />
          <Pagination>
            <p>
              Pages: {active_page} / {total_page}
            </p>
            <Button click={handlePrevios}>Previous</Button>
            <Button click={handleNext}>Next</Button>
          </Pagination>
        </NowPlayingWrapper>
      )}
    </React.Fragment>
  );
};
export default AllNowPLayingMovies;
