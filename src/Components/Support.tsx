import React, { useState } from 'react'
import { IMessages } from './Clients';

export default function SupportComponent(): JSX.Element {
    const [collapseKey, setCollapseKey] = React.useState<number[]>([])
    // eslint-disable-next-line
    const [messages, setMessages] = useState<IMessages[]>([
        { id: 1, message: 'Hello', name: 'John' },
        { id: 2, message: 'Hola', name: 'Martha' },
        { id: 1, message: 'Im 1', name: 'John' },
        { id: 2, message: 'Im 2', name: 'Martha' },
    ]);
    let rooms = [
        { name: 'Bank', clients: [1, 2, 3, 4, 5] },
        { name: 'Insurance', clients: [11, 44, 66, 88, 99] },
        { name: 'Others', clients: [12, 54, 76, 34, 56, 83] },

    ]

    const handleCollapse = (index: number) : void => {
        collapseKey.includes(index) ?
            setCollapseKey(collapseKey.filter((key: number) => key !== index)) :
            setCollapseKey((prev) => [...prev, index])
    }
    return (
        <div className='support_wrapper'>
            <div className='rooms'>
                {rooms.map((room, index) => {
                    return <>
                        <div onClick={()=>{handleCollapse(index)}} className='room'>
                            <div className='room_name'>{room.name} </div>
                            <div className='room_length'>Clients : {room.clients.length}</div>
                        </div>
                        <div className={`client_list ${collapseKey.includes(index) && 'active'}`}>
                            <div style={{height:'110%',paddingTop:'20px',paddingBottom:'20px', width:'100%', alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            {room.clients.map((client) => {
                                return <div className='client_one'>
                                    <div className='client_name'>Client {client}</div>
                                </div>
                            })}
                            </div>
                        </div>
                    </>
                })}
            </div>
            <div className='support_chat'>
                <div className='chat_wrapper'>
                    <div className='chat' style={{position:'fixed', top:'15%'}}>
                        <div className='chat_body'>
                            {messages.map((message) => {
                                const { id } = message;
                                return <div key={id} className='chat_message'>
                                    <div style={{ marginRight: '10px' }}>{message.name} : </div>
                                    <span>{message.message}</span>
                                </div>
                            })}
                        </div>
                        <div className='chat_footer'>
                            <input className='chat_footer_input' type='text' placeholder='Type a message' />
                            <button className='chat_footer_button'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
