import { act, renderHook } from "@testing-library/react"
import useCounter from "./useCounter";

describe('useCounter', () => {
  it("increment", () => {
    renderHook(() => useCounter(1));
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
  })
})
