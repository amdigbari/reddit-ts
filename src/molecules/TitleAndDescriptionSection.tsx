import React from "react";
import Caption from "atoms/Caption";

type titleAndDescriptionSectionProps = {
    description: string;
    title: string;
};

const TitleAndDescriptionSection: React.FC<titleAndDescriptionSectionProps> = ({ title, description }) => {
    return (
        <div className='w-full'>
            <p className='text-gray-800 font-semibold mb-3'>{title}</p>

            <div className='w-full pl-3'>
                <Caption text={description} />
            </div>
        </div>
    );
};
export default TitleAndDescriptionSection;
