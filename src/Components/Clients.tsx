import React from 'react'

export default function ClientsComponent(): JSX.Element {
  return (
    <div className='chat_wrapper'>
        <div className='chat'>
            <div className='chat_body'>

            </div>
            <div className='chat_footer'>
                    <input className='chat_footer_input' type='text' placeholder='Type a message' />
                    <button className='chat_footer_button'>Send</button>
            </div>
        </div>
    </div>
  )
}
