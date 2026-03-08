import { useState } from "react"
import SearchPapers from "./pages/SearchPapers"
import Chatbot from "./pages/Chatbot"
import WorkSpace from "./pages/WorkSpace"

function App() {

  const [page, setPage] = useState("search")

  return (
    <div style={{padding:40}}>

      <h1>ResearchHub AI</h1>

      <div style={{marginBottom:20}}>
        <button onClick={() => setPage("search")}>Search Papers</button>
        <button onClick={() => setPage("workspace")}>Workspace</button>
        <button onClick={() => setPage("chat")}>Chatbot</button>
      </div>

      {page === "search" && <SearchPapers />}
      {page === "workspace" && <WorkSpace />}
      {page === "chat" && <Chatbot />}

    </div>
  )
}

export default App