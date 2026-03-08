import { useState } from "react"
import axios from "axios"

export default function Chatbot() {

const [question, setQuestion] = useState("")
const [answer, setAnswer] = useState("")

const askQuestion = async () => {

```
try {

  const res = await axios.post(
    "http://localhost:8000/chat/ask",
    null,
    { params: { question } }
  )

  setAnswer(res.data.answer)

} catch (error) {
  console.error(error)
  alert("Error contacting AI")
}
```

}

return (

```
<div>

  <h2>Research AI Assistant</h2>

  <input
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    placeholder="Ask about the papers..."
  />

  <button onClick={askQuestion}>Ask AI</button>

  <div style={{marginTop:20}}>
    <strong>Answer:</strong>
    <p>{answer}</p>
  </div>

</div>
```

)

}
