import "@testing-library/jest-dom";
import React from "react";

import { fireEvent, render, waitForElement } from "@testing-library/react";

import UpdateProfile, { initialProps as updateProfileFormFields, formFieldTypes } from "./UpdateProfile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { act } from "react-dom/test-utils";

describe("update profile input check", () => {
    test("inputs name and type", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <UpdateProfile />
                    </Route>
                </Switch>
            </BrowserRouter>,
        );

        Object.keys(updateProfileFormFields).forEach(key => {
            expect(getByTestId(key)).toHaveAttribute("name", key);
            expect(getByTestId(key)).toHaveAttribute("type", formFieldTypes[key] || "text");
        });
    });

    it("input errors", () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Switch>
                    <Route path='/'>
                        <UpdateProfile />
                    </Route>
                </Switch>
            </BrowserRouter>,
        );

        Object.keys(updateProfileFormFields).forEach(key => {
            if (key !== "bio" && key !== "city") {
                act(() => {
                    const input = getByTestId(key);

                    fireEvent.focus(input);
                    key === "phone" && fireEvent.change(input, { target: { value: "salam" } });
                    fireEvent.blur(input);
                });

                waitForElement(() => {
                    expect(getByTestId(`${key}-error`)).toBeInTheDocument();
                });
            }
        });
    });
});
