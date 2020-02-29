import React, { DOMAttributes, PropsWithChildren, ReactElement } from "react";
import { ThumbsDown, ThumbsUp } from "react-feather";

import { feedBackType } from "templates/post/postActions";

export type setScoreType<R> = (score: number) => R;

type scoreProps<R> = {
    userScore: number;
    feedBacks: feedBackType;
    setScore: setScoreType<R>;
};

function Score<R>({
    userScore: initialUserScore,
    feedBacks: initialFeedBacks,
    setScore,
}: PropsWithChildren<scoreProps<R>>): ReactElement {
    let [userScore, setUserScore] = React.useState<number>(initialUserScore);

    let initialScoreWithoutUserScore = React.useMemo(
        () => initialFeedBacks.likes - initialFeedBacks.dislikes - initialUserScore,
        [initialFeedBacks, initialUserScore],
    );

    let totalScore = React.useMemo(() => initialScoreWithoutUserScore + userScore, [
        userScore,
        initialScoreWithoutUserScore,
    ]);

    React.useEffect(() => {
        setScore(userScore);
    }, [userScore, setScore]);

    const like: DOMAttributes<SVGElement>["onClick"] = () => {
        setUserScore(prevScore => (prevScore > 0 ? 0 : 1));
    };

    const dislike: DOMAttributes<SVGElement>["onClick"] = () => {
        setUserScore(prevScore => (prevScore < 0 ? 0 : -1));
    };

    return (
        <div className='flex items-center'>
            <ThumbsDown
                size={19}
                className={`text-${userScore < 0 ? "red" : "gray"}-500 cursor-pointer`}
                onClick={dislike}
            />

            <span className='text-gray-800 font-normal px-2'>{totalScore}</span>

            <ThumbsUp
                size={19}
                className={`text-${userScore > 0 ? "green" : "gray"}-500 cursor-pointer`}
                onClick={like}
            />
        </div>
    );
}
export default Score;
