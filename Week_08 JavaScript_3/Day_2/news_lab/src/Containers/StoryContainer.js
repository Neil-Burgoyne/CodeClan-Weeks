import React, {useState, useEffect} from "react";
import StoryList from "../Components/StoryList";
import Story from "../Components/Story";

const StoryContainer = () => {

    const [stories, setStories] = useState([])

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then((data) => {
            const copyStoryArray = [...data];
            const reducedStoryArray = copyStoryArray.splice(0, 20);
            console.log(reducedStoryArray);
    
            const promises = reducedStoryArray.map((id) => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                .then((res) => res.json());
            });
    
            Promise.all(promises).then((data) => {
                setStories(data)
            });
        });
    }, []); 





    // useEffect(() => {
    //     fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    //     .then(res => res.json())
    //     .then((data) => {
    //         const copyStoryArray = [...data];
    //         const reducedStoryArray = copyStoryArray.splice(0, 20);
    //         console.log(reducedStoryArray);
    //     })
    // })

    // const promises = reducedStoryArray.map((id) =>{
    //         return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    //         .then((res) => res.json());
                
    //     });






 

    //         // Promise.all(promises).then((data) => {
    //         //     setStories.data
    //         // });
    //     });
    // }, [] );

    



    //     Promise.all(promises)
    //     .then((data) => {
    //         setStories(data);
    //      });
   
    // }, []);
    
   
    
  




    return (
        <>
        <h1>Top Stories</h1>
        <StoryList stories={stories}/>
        </>
    );

  

};

export default StoryContainer; 