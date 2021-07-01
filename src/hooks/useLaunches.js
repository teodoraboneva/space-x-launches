import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { baseUrl, queryLimit } from "../constants";

const useLaunches = () => {
  const [launchYear, setLaunchYear] = useState(null);
  const [successfulLaunch, setSuccessfulLaunch] = useState(null);
  const [successfulLanding, setSuccessfulLanding] = useState(null);
  const [launchesData, setLaunchesData] = useState([]);

  let history = useHistory();

  useEffect(() => {
    const query = {
      launch_year: launchYear,
      launch_success: successfulLaunch,
      land_success: successfulLanding,
    };

    const buildQueryString = () => {
      return Object.keys(query).reduce(
        (acc, key) =>
          acc + (query[key] === null ? "" : `&${key}=${query[key]}`),
        `?limit=${queryLimit}`
      );
    };

    const queryString = buildQueryString();
    history.push(queryString);

    const fetchData = async () => {
      const url = baseUrl + queryString;
      const res = await fetch(url);
      const data = await res.json();

      setLaunchesData(data);
    };

    fetchData();
  }, [launchYear, successfulLaunch, successfulLanding, history]);

  return {
    launchesData,
    launchYear,
    setLaunchYear,
    successfulLaunch,
    setSuccessfulLaunch,
    successfulLanding,
    setSuccessfulLanding,
  };
};

export default useLaunches;
