import React, { useState } from 'react';


const FlipCard = ({ frontContent, backContent }) => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => setFlipped(!flipped);

    return (
        <div className="flip-card-container d-flex justify-content-center my-3 w-100" onClick={handleFlip}>
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="flip-card-front card p-3 text-center">
                    <img src={frontContent} alt="Skill Front" className="img-fluid" />
                </div>
                <div className="flip-card-back card p-3 text-center">
                    <p>{backContent}</p>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
