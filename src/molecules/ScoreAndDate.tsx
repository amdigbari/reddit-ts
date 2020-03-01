import React from "react";

import Score from "atoms/Score";
import { feedBackType } from "templates/post/postActions";
import { setScoreType } from "../atoms/Score";

type scoreAndDateProps = {
    score: number;
    feedbacks: feedBackType;
    createDate: string;
    setScore: setScoreType;
};

const ScoreAndDate: React.FC<scoreAndDateProps> = ({ score, feedbacks, createDate, setScore }) => {
    return (
        <div className='w-full flex items-center justify-between pb-6'>
            <Score userScore={score} feedBacks={feedbacks} setScore={setScore} />

            <p className='text-gray-800 font-normal'>{createDate}</p>
        </div>
    );
};
export default ScoreAndDate;
