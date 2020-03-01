import { useEffect, useRef, useState, useCallback, Dispatch } from "react";

export const useToggle: (initialState: boolean | (() => boolean)) => [boolean, Dispatch<void>] = initialState => {
    const [state, setState] = useState<boolean>(initialState);

    const toggleState = useCallback(() => setState(s => !s), []);
    return [state, toggleState];
};

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
