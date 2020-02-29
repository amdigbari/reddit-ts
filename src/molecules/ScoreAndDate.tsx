import React, { PropsWithChildren, ReactElement } from "react";

import Score from "atoms/Score";
import { feedBackType } from "templates/post/postActions";
import { setScoreType } from "../atoms/Score";

type scoreAndDateProps<R> = {
    score: number;
    feedbacks: feedBackType;
    createDate: string;
    setScore: setScoreType<R>;
};

function ScoreAndDate<R>({
    score,
    feedbacks,
    createDate,
    setScore,
}: PropsWithChildren<scoreAndDateProps<R>>): ReactElement {
    return (
        <div className='w-full flex items-center justify-between pb-6'>
            <Score<R> userScore={score} feedBacks={feedbacks} setScore={setScore} />

            <p className='text-gray-800 font-normal'>{createDate}</p>
        </div>
    );
}
export default ScoreAndDate;
