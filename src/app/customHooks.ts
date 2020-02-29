import { useEffect, useRef } from "react";

export const useDepsChanged: typeof useEffect = (effect, deps) => {
    let isFirstRender = useRef(true);

    useEffect(() => {
        if (!isFirstRender.current) {
            effect();
        } else {
            isFirstRender.current = false;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
