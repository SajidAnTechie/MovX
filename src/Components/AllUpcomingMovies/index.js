import React, { useEffect, useState } from "react";
import apikey from "../../api/apiKey";
import List from "./List";
import { UpcominggWrapper } from "./style";
import Loader from "../loader/Loader";
import axios from "axios";

const AllUpcomingMovies = () => {
  const [Upcoming, setUpcoming] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let source = axios.CancelToken.source();
    const fetchUpcomingData = async () => {
      try {
        const upcomingData = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
          {
            cancelToken: source.token,
          }
        );

        setUpcoming(upcomingData.data.results);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log(error);
        }
      }
    };

    fetchUpcomingData();

    return () => {
      console.log("Component Unmount");
      source.cancel();
    };
  }, []);

  return (
    <UpcominggWrapper>
      {Loading && <Loader />}
      {!Loading && <List movieData={Upcoming} />}
    </UpcominggWrapper>
  );
};
export default AllUpcomingMovies;
