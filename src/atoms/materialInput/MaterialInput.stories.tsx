import React from "react";
import { select } from "@storybook/addon-knobs";

import MaterialInput from "./MaterialInput";

export default {
    title: "Material Input",
    component: MaterialInput
};

export const input = () => {
    let variant = select(
        "Variant",
        ["outline", "default"],
        "default",
        "material input"
    );

    return <MaterialInput label="input" variant={variant} />;
};
