import Grid from "@material-ui/core/Grid";
import MediaCard from "../MediaCard/MediaCard";

const LaunchesList = ({ launchesData }) => {
  return (
    <Grid container spacing={3}>
      {launchesData.length === 0
        ? "No results"
        : launchesData.map(
            ({
              flight_number,
              // launch_landing,
              launch_success,
              launch_year,
              links: { mission_patch },
              mission_id,
              mission_name,
              rocket,
            }) => {
              const land_success = rocket.first_stage.cores[0].land_success;
              return (
                <Grid key={flight_number} item xs={12} sm={6} md={4} lg={3}>
                  <MediaCard
                    image={mission_patch}
                    heading={`${mission_name} #${flight_number}`}
                  >
                    <p>Mission Ids:</p>
                    {mission_id.length > 0 && (
                      <ul>
                        {mission_id.map((id) => (
                          <li key={id}>{id}</li>
                        ))}
                      </ul>
                    )}
                    <p>Launch Year: {launch_year}</p>
                    <p>Successful Launch: {launch_success?.toString()}</p>
                    <p>Successful Landing: {land_success?.toString()}</p>
                  </MediaCard>
                </Grid>
              );
            }
          )}
    </Grid>
  );
};

export default LaunchesList;
