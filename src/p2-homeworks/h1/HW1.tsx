import React, { useState } from 'react'

import Message, { MessagePropTypes } from './Message';

// const messageData = {
//     avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//     name: 'Some Name',
//     message: 'some text',
//     time: '22:00',
// }

function HW1() {
    const [state, setState] = useState<MessagePropTypes[]>([{
        avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
        name: 'Some Name',
        message: 'some text',
        time: '22:00',
    }])

    const [messageValue, setMessageValue] = useState<string>('')

    const addMessage = () => {
        setState([
            ...state,
            {
                avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
                name: 'Hero',
                message: messageValue,
                time: new Date().toLocaleTimeString(),
            }
        ])

        setMessageValue('');
    }

    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            {state.map((m, i) => (
                <Message
                    key={`${m}_${i}`}
                    avatar={m.avatar}
                    name={m.name}
                    message={m.message}
                    time={m.time}
                />
            ))}

            <textarea
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                rows={3}
            />
            <button onClick={addMessage}>add</button>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
