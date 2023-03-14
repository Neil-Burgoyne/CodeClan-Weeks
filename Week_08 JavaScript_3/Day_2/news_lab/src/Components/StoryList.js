import React from 'react'; 
import Story from './Story';

const StoryList = ({stories}) => {

    const storyList = stories.map((story, i) => {
        return (<Story key ={i} details={story} position ={i+1} />)
    });

    return(
        <>
        <ul>
            {storyList}
        </ul>
        </>
    );
};

export default StoryList; 