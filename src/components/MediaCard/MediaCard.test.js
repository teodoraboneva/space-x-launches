import renderer from "react-test-renderer";
import MediaCard from "./MediaCard";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <MediaCard image="image" heading="FalconSat #1">
        <p>Launch Year: 2006</p>
        <p>Successful Launch: false</p>
      </MediaCard>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
