import React, { useState } from 'react'

interface IMessages {
    id: number;
    message: string;
    name: string;
}

export default function ClientsComponent(): JSX.Element {

    const [messages, setMessages] = useState<IMessages[]>([
        { id: 1, message: 'Hello', name: 'John' },
        { id: 2, message: 'Hola', name: 'Martha' },
        { id: 1, message: 'Im 1' , name: 'John'  },
        { id: 2, message: 'Im 2', name: 'Martha' },
    ]);

    return (
        <div className='chat_wrapper'>
            <div className='chat'>
                <div className='chat_body'>
                    {messages.map((message) => {
                        const { id } = message; 
                        return <div key={id} className='chat_message'>
                            <div style={{marginRight:'10px'}}>{message.name} : </div>
                            <span>{message.message}</span>
                        </div> })}
                </div>
                <div className='chat_footer'>
                    <input className='chat_footer_input' type='text' placeholder='Type a message' />
                    <button className='chat_footer_button'>Send</button>
                </div>
            </div>
        </div>
    )
}
