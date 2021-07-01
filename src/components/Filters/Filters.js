import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./Filters.css";

const Filters = ({
  launchYear,
  setLaunchYear,
  successfulLaunch,
  setSuccessfulLaunch,
  successfulLanding,
  setSuccessfulLanding,
}) => {
  return (
    <Paper className="filters" align="center">
      <Typography variant="h5" component="h2">
        Filters
      </Typography>
      <Typography variant="h6" component="h3">
        Launch Year
      </Typography>
      {Array.from({ length: 15 }, (_, k) => k + 2006).map((year) => (
        <Button
          id={'button-' + year.toString()}
          key={year}
          variant={year === launchYear ? "contained" : "outlined"}
          color="primary"
          onClick={() => setLaunchYear(year)}
        >
          {year}
        </Button>
      ))}
      <Typography variant="h6" component="h3">
        Successful Launch
      </Typography>
      <Button
        id="successfulLaunch"
        variant={successfulLaunch === true ? "contained" : "outlined"}
        color="primary"
        onClick={() => setSuccessfulLaunch(true)}
      >
        True
      </Button>
      <Button
        id="unsuccessfulLaunch"
        variant={successfulLaunch === false ? "contained" : "outlined"}
        color="primary"
        onClick={() => setSuccessfulLaunch(false)}
      >
        False
      </Button>
      <Typography variant="h6" component="h3">
        Successful Landing
      </Typography>
      <Button
        id="successfulLanding"
        variant={successfulLanding === true ? "contained" : "outlined"}
        color="primary"
        onClick={() => setSuccessfulLanding(true)}
      >
        True
      </Button>
      <Button
        id="unsuccessfulLanding"
        variant={successfulLanding === false ? "contained" : "outlined"}
        color="primary"
        onClick={() => setSuccessfulLanding(false)}
      >
        False
      </Button>
    </Paper>
  );
};

export default Filters;
