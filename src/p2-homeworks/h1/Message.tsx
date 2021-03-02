import React from 'react'

import classes from './Message.module.css'

export type MessagePropTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: MessagePropTypes) {
    return (
        <div className={classes.message}>
            <div className={classes.message__avatar}>
                <img src={avatar} alt={`Avatar ${name}`}/>
            </div>

            <div className={classes.message__content}>
                <div className={classes.message__bubble}>
                    <p className={classes.message__name}>{name}</p>
                    <p className={classes.message__text}>{message}</p>
                </div>

                <span className={classes.message__date}>
                    {time}
                </span>
            </div>
        </div>
    );
}

export default Message
