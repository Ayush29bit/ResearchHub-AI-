import { useState } from "react"

export default function WorkSpace() {

  const [workspaceName, setWorkspaceName] = useState("")
  const [workspaces, setWorkspaces] = useState<string[]>([])

  const createWorkspace = () => {

    if (!workspaceName.trim()) return

    setWorkspaces([...workspaces, workspaceName])
    setWorkspaceName("")

  }

  return (

    <div>

      <h2>Research Workspaces</h2>

      <input
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
        placeholder="Enter workspace name"
      />

      <button onClick={createWorkspace}>Create Workspace</button>

      <ul style={{ marginTop: 20 }}>

        {workspaces.map((workspace, index) => (
          <li key={index}>{workspace}</li>
        ))}

      </ul>

    </div>

  )

}