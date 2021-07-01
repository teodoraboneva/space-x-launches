import renderer from "react-test-renderer";
import LaunchesList from "./LaunchesList";

const launchesData = [
    {
      "flight_number": 1,
      "mission_name": "FalconSat",
      "mission_id": [],
      "launch_year": "2006",
      "rocket": {
        "first_stage": {
          "cores": [
            {
              "land_success": null,
            }
          ]
        },
        
      },
      "launch_success": false,
      "links": {
        "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
      },
    },
    {
      "flight_number": 7,
      "mission_name": "COTS 1",
      "mission_id": [
        "EE86F74"
      ],
      "launch_year": "2010",
      "rocket": {
        "first_stage": {
          "cores": [
            {
              "land_success": null,
            }
          ]
        },
      },
      "launch_success": true,
      "links": {
        "mission_patch": "https://images2.imgbox.com/00/2f/FhtEd0nB_o.png",
      },
    },
  ];

it("renders correctly", () => {
  const tree = renderer.create(<LaunchesList launchesData={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with data", () => {
  const tree = renderer.create(<LaunchesList launchesData={launchesData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
