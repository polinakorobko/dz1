import React from "react";
const UserButton = ({text, onClick}) => {
    return  (
        <button className="btn bg-dark" type='button' onClick={onClick}>
            <span className="card-button__text text-light">{text}</span>
        </button>
    );
};

export default UserButton;