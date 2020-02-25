import React, { ChangeEvent, Ref, MutableRefObject } from "react";
import MaterialInput from "./materialInput/MaterialInput";

export type searchbarProps = {
    search: (query: string) => void;
};

const Searchbar: React.FC<searchbarProps> = ({ search }) => {
    const timeoutRef: MutableRefObject<number | undefined> = React.useRef();

    let [query, setQuery] = React.useState("");
    let [isTyping, setIsTyping] = React.useState(false);

    const onChange: (event: ChangeEvent<HTMLInputElement>) => void = ({ target: { value: _value } }) => {
        setQuery(_value);

        timeoutRef.current && clearTimeout(timeoutRef.current);
        setIsTyping(true);

        timeoutRef.current = window.setTimeout(() => {
            setIsTyping(false);
        }, 500);
    };

    React.useEffect(() => {
        if (!isTyping && query.trim().length) {
            search(query.trim());
        }
    }, [query, isTyping, search]);

    return (
        <MaterialInput autoFocus label='Search' className='w-full' pattern='salam' value={query} onChange={onChange} />
    );
};
export default Searchbar;
