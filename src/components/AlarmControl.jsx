import { useState } from 'react'
import './AlarmControl.css'

export default function AlarmControl() {
  const [state, setState] = useState('off')
  const [loading, setLoading] = useState(false)

  const handleToggle = async () => {
    setLoading(true)
    try {
      // TODO: Send command to backend API
      // const response = await axios.post(`${import.meta.env.VITE_API_URL}/alarm/toggle`)
      // setState(response.data.state)
      setState(state === 'off' ? 'on' : 'off')
    } catch (error) {
      console.error('Failed to toggle alarm:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="control-card alarm-control">
      <div className="control-header">
        <h2>🔔 Alarm</h2>
        <span className={`state-badge ${state}`}>{state}</span>
      </div>
      <div className="control-body">
        <button 
          onClick={handleToggle} 
          disabled={loading}
          className={`control-button ${state}`}
        >
          {loading ? 'Loading...' : (state === 'off' ? 'Activate' : 'Deactivate')}
        </button>
      </div>
      <div className="control-footer">
        <small>Last action: --:--</small>
      </div>
    </div>
  )
}
