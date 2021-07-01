import renderer from "react-test-renderer";
import Launches from "./Launches";

it("renders correctly", () => {
  const tree = renderer.create(<Launches />).toJSON();
  expect(tree).toMatchSnapshot();
});
