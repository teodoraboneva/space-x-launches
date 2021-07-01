import renderer from "react-test-renderer";
import { mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Filters from "./Filters";

Enzyme.configure({ adapter: new Adapter() });

const props = {
  launchYear: null,
  setLaunchYear: jest.fn(),
  successfulLaunch: null,
  setSuccessfulLaunch: jest.fn(),
  successfulLanding: null,
  setSuccessfulLanding: jest.fn(),
};

it("renders correctly", () => {
  const tree = renderer.create(<Filters />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with year selected", () => {
  const tree = renderer.create(<Filters {...props} launchYear={2006} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with successfulLaunch selected", () => {
  const tree = renderer.create(<Filters {...props} successfulLaunch={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with sunuccessfulLaunch selected", () => {
  const tree = renderer.create(<Filters {...props} successfulLaunch={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with successfulLanding selected", () => {
  const tree = renderer.create(<Filters {...props} successfulLanding={true} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with unsuccessfulLanding selected", () => {
  const tree = renderer.create(<Filters {...props} successfulLanding={false} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("changes first year", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#button-2006").simulate("click");
  expect(props.setLaunchYear).toHaveBeenCalledWith(2006);
});

it("changes second year", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#button-2007").simulate("click");
  expect(props.setLaunchYear).toHaveBeenCalledWith(2007);
});

it("changes successfulLaunch to true", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#successfulLaunch").simulate("click");
  expect(props.setSuccessfulLaunch).toHaveBeenCalledWith(true);
});

it("changes successfulLaunch to false", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#unsuccessfulLaunch").simulate("click");
  expect(props.setSuccessfulLaunch).toHaveBeenCalledWith(false);
});

it("changes successfulLanding to true", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#successfulLanding").last().simulate("click");
  expect(props.setSuccessfulLanding).toHaveBeenCalledWith(true);
});

it("changes successfulLanding to false", () => {
  const wrapper = mount(<Filters {...props} />);
  wrapper.find("button#unsuccessfulLanding").last().simulate("click");
  expect(props.setSuccessfulLanding).toHaveBeenCalledWith(false);
});
