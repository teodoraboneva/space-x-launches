import Grid from "@material-ui/core/Grid";

import Filters from "../Filters/Filters";
import Header from "../Header/Header";
import LaunchesList from "../LaunchesList/LaunchesList";
import useLaunches from "../../hooks/useLaunches";
import "./Launches.css";

const Launches = () => {
  const {
    launchesData,
    launchYear,
    setLaunchYear,
    successfulLaunch,
    setSuccessfulLaunch,
    successfulLanding,
    setSuccessfulLanding,
  } = useLaunches();

  return (
  <div className="launches">
    <Header />
    <main>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Filters 
          launchYear={launchYear}
          setLaunchYear={setLaunchYear}
          successfulLaunch={successfulLaunch}
          setSuccessfulLaunch={setSuccessfulLaunch}
          successfulLanding={successfulLanding}
          setSuccessfulLanding={setSuccessfulLanding}
          />
        </Grid>
        <Grid item sm={9}>
          <LaunchesList launchesData={launchesData} />
        </Grid>
      </Grid>
    </main>
  </div>
);
  }

export default Launches;
