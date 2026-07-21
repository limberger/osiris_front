import { useState } from 'react'
import './GateControl.css'

export default function GateControl() {
  const [state, setState] = useState('closed')
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    try {
      // TODO: Send command to backend API
      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/gate/toggle`)
      // setState(response.data.state)
      setState(state === 'closed' ? 'open' : 'closed')
    } catch (error) {
      console.error('Failed to toggle gate:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="control-card gate-control">
      <div className="control-header">
        <h2>🚪 Gate</h2>
        <span className={`state-badge ${state}`}>{state}</span>
      </div>
      <div className="control-body">
        <button 
          onClick={handleToggle} 
          disabled={loading}
          className={`control-button ${state}`}
        >
          {loading ? 'Loading...' : (state === 'closed' ? 'Open' : 'Close')}
        </button>
      </div>
      <div className="control-footer">
        <small>Last action: --:--</small>
      </div>
    </div>
  )
}
