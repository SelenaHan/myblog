import React from 'react';
import ContentCard from './ContentCard';
import PostContents from './PostContents';

const MainPage = ({ PostContent }) => {

    return (
       <div>
        
            {PostContents.map((PostContent, index) => (
                <div>
                    <ContentCard title={PostContent.title} post_content={PostContent.post_content} img={PostContent.post_img} key={index} />
                </div>
            ))}
        </div>
    )
}

export default MainPage;