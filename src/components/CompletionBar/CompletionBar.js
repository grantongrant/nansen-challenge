import React from "react";
import './CompletionBar.css';

const CompletionBar = ({num}) => {
    return (
        <div className="completion-bar">
            <div className="percentage-complete">{num}% Done</div>
            <div className="bar-component">
                <div style={{width: num+ "%"}} className="bar-component purple"></div>
            </div>
        </div>
    )
};

export default CompletionBar;