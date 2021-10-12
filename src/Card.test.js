import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("renders without crashing", function () {
    render(<Card caption="Test" currNum={1} src="test.png" totalNum={3} />);
});


test("matches snapshot", function () {
    const { container } = render(<Card caption="Test" currNum={1} src="test.png" totalNum={3} />);
    expect(container).toMatchSnapshot();
});