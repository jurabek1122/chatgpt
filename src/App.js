import { useState, useEffect } from 'react';
import { OpenAIApi, Configuration } from 'openai'
import user from './images/user.png'
import ai from './images/ai.png'

function App() {
  const [value, setValue] = useState('')
  const [chat, setChat] = useState([])
  const [btnLoader, setBtnLoader] = useState(false)

  const openai = new OpenAIApi(new Configuration({
    apiKey: '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'
  }))

  const sendReq =  (e) => {
    e.preventDefault();
    setChat(prev => ([
      ...prev, {
        type: 'user',
        content: value
      }
    ]))
    setValue('')
    setBtnLoader(true)
    
    openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: value}]
    }).then(function(response) {
      console.log(response, 'res')
      setBtnLoader(false)
      setChat(prev => ( [
        ...prev, {
          type: 'gpt',
          content: response.data.choices[0].message.content
        }
      ]))
    }).catch(function(error) {
      console.error(error);
      setBtnLoader(false)
    });
  }

  return (
    <div className='chatWrapper'>
      <div className='chat'>
        {chat?.map((item, i) => <div key={i} className='message'>
          {item.type === 'user' ? <img src={user} /> : <img src={ai} />}
          <p>{item.content}</p>
        </div>)}
      </div>
      <form className='forms' onSubmit={sendReq}>
        <input 
         type='text'
         placeholder='savol bering'
         value={value}
         onChange={(e) => setValue(e.target.value)}
         required
        />
        {btnLoader ? <button type='button' disabled>Javobni kuting...</button> : <button type='submit'>send</button>}
        
      </form>
    </div>
  );
}

export default App;
