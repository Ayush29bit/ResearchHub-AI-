import { useState } from "react"
import axios from "axios"

type Paper = {
  title: string
  summary: string
}

export default function SearchPapers() {

  const [query, setQuery] = useState("")
  const [papers, setPapers] = useState<Paper[]>([])

  const searchPapers = async () => {

    try {

      const res = await axios.get(
        `http://localhost:8000/papers/search?query=${query}`
      )

      setPapers(res.data)

    } catch (error) {

      console.error(error)
      alert("Error fetching papers")

    }

  }

  return (
    <div>

      <h2>Search Research Papers</h2>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search topic (e.g. transformers)"
      />

      <button onClick={searchPapers}>Search</button>

      <div>

        {papers.map((paper, index) => (

          <div key={index} style={{ marginTop: 20 }}>

            <h3>{paper.title}</h3>
            <p>{paper.summary}</p>

          </div>

        ))}

      </div>

    </div>
  )

}