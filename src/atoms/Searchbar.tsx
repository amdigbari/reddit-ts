import React, { ChangeEvent, Ref, MutableRefObject } from "react";

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
        }, 350);
    };

    React.useEffect(() => {
        if (!isTyping && query.trim().length) {
            search(query.trim());
        }
    }, [query, isTyping, search]);

    return (
        <input
            className='border-0 border-b border-gray-500 placeholder-gray-300 w-full focus:border-blue-500 focus:placeholder-blue-300 outline-none transition-colors duration-200 text-blue-500'
            autoFocus
            placeholder='Search ...'
            value={query}
            onChange={onChange}
        />
    );
};
export default Searchbar;
