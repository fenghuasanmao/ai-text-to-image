import { Configuration, OpenAIApi } from 'openai'
import { useState } from 'react';
import './App.css'

function App() {

    const [promt, setPromt] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    function handleChange(e) {
        setPromt(e.target.value)
    }

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
const response = async () => {
    const res = await openai.createImage({
        prompt: promt,
        n: 1,
        size: '1024x1024'
    });
    setImageUrl(res.data.data[0].url)
}
    return <div className='content'>
        <h3>AI 图片生成</h3>
        <input type="text" placeholder='输入图片的描述文字' onChange={handleChange} />
        <button onClick={response}>生成图片</button>
        {imageUrl.length > 0 ? <img src={imageUrl} alt="" /> : <></>}
    </div>
}

export default App;