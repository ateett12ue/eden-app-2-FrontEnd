import { render } from "@testing-library/react";

import { Charts } from ".";

describe("Charts", () => {
  it("renders without throwing", () => {
    const { container } = render(<Charts />);

    expect(container).toBeInTheDocument();
  });
});
