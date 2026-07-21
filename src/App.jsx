import { useState, useEffect } from 'react'
import './App.css'
import GateControl from './components/GateControl'
import AlarmControl from './components/AlarmControl'
import StatusPanel from './components/StatusPanel'

function App() {
  const [connected, setConnected] = useState(false)
  const [status, setStatus] = useState({
    gate: 'closed',
    alarm: 'off',
    timestamp: null,
  })

  useEffect(() => {
    // TODO: Connect to WebSocket server
    // const ws = new WebSocket(import.meta.env.VITE_WS_URL)
    // ws.addEventListener('open', () => setConnected(true))
    // ws.addEventListener('close', () => setConnected(false))
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>OSIRIS</h1>
        <p>Home Automation & Access Control</p>
        <div className={`connection-status ${connected ? 'connected' : 'disconnected'}`}>
          {connected ? '🟢 Connected' : '🔴 Disconnected'}
        </div>
      </header>

      <main className="app-main">
        <StatusPanel status={status} />
        
        <div className="controls">
          <GateControl />
          <AlarmControl />
        </div>
      </main>

      <footer className="app-footer">
        <p>© 2026 OSIRIS Project • <a href="https://github.com/limberger/osiris">GitHub</a></p>
      </footer>
    </div>
  )
}

export default App
