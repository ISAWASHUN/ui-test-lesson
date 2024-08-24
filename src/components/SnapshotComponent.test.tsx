import { render } from "@testing-library/react"
import SnapshotComponent from "./SnapshotComponent"

describe("Snapshotテスト", () => {
  const {container} = render(<SnapshotComponent text="React"/>);
  expect(container).toMatchSnapshot();
})
