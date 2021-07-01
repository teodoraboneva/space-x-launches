import { renderHook, act } from "@testing-library/react-hooks";
import useLaunches from "./useLaunches";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test("should set launch year", () => {
  const { result } = renderHook(() => useLaunches());

  act(() => {
    result.current.setLaunchYear(2006);
  });

  expect(result.current.launchYear).toBe(2006);
});

test("should set sccessful launch", () => {
  const { result } = renderHook(() => useLaunches());

  act(() => {
    result.current.setSuccessfulLaunch(true);
  });

  expect(result.current.successfulLaunch).toBe(true);
});

test("should set successful landing", () => {
  const { result } = renderHook(() => useLaunches());

  act(() => {
    result.current.setSuccessfulLanding(true);
  });

  expect(result.current.successfulLanding).toBe(true);
});
