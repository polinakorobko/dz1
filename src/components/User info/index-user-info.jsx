import React from "react";

import UserButton from "./UserButton";

import UserText from "./Card-text";
import { useState } from 'react';

const UserCard = () => {
    const [show, setShow] = useState(false);

    const onClick = () => setShow(true);
    return (
        <div className="card" style={{ border: "none" }}>
            <div className="card-content text-center">
                {show ? <div className="boxContent">
                    <div>
                        <UserText info={'Имя: Иван Иванов'} />
                        <UserText info={'Возраст: 25'} />
                        <UserText info={'Пол: мужской'} />
                    </div>
                </div> : null}
                <UserButton text={'Show information'} onClick={onClick}/>
            </div>
        </div >
    );
};

export default UserCard;