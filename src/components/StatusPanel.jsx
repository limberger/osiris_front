import './StatusPanel.css'

export default function StatusPanel({ status }) {
  return (
    <div className="status-panel">
      <h2>System Status</h2>
      <div className="status-grid">
        <div className="status-item">
          <span className="status-label">Gate Status</span>
          <span className={`status-value ${status.gate}`}>{status.gate}</span>
        </div>
        <div className="status-item">
          <span className="status-label">Alarm Status</span>
          <span className={`status-value ${status.alarm}`}>{status.alarm}</span>
        </div>
        <div className="status-item">
          <span className="status-label">Last Update</span>
          <span className="status-value">{status.timestamp || 'Never'}</span>
        </div>
      </div>
    </div>
  )
}
