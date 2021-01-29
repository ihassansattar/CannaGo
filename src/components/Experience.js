import React, {useState} from 'react'
import StarRatings from 'react-star-ratings'
import {useHistory} from "react-router-dom";
const Experience = () => {
    let history = useHistory();
    const Shop = () => {
        history.push("/storeonline");
    }
    const [rating,
        setRating] = useState(4);
    const changeRating = (newRating) => {
        setRating(newRating)
    }
    return (
        <div className="experience-cont">
            <div className="order-experience">
                <h3>Rate your Experience
                </h3>
                <h2>$74.81</h2>
                <h3>Great</h3>
                <div className="star-rating"><StarRatings
                    rating={rating}
                    starRatedColor="#f5a623"
                    starEmptyColor="#c6c6c6"
                    changeRating={changeRating}
                    starHoverColor="#f5a623"
                    numberOfStars={5}
                    name='rating'/>
                </div>
                <h3>Leave Tip?</h3>
                <div className="experience-tip">
                    <button>10%</button>
                    <button>15%</button>
                    <button>20%</button>
                    <button>Custom</button>
                </div>
                <h3>What could be better?</h3>
                <div className="experience-better">
                    <button>User experience
                    </button>
                    <button>Packaging</button>
                    <button>Timing</button>
                </div>
                <div className="experience-comment">
                    <label>Leave comment</label>
                    <textarea/>
                </div>
                <div className="experience-submit">
                    <button onClick={Shop}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Experience;