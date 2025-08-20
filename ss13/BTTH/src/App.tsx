function App() {
  return (
    <>
     <div className="container">
  {/* Header */}
  <div className="header">
    <h1>📝 TodoList</h1>
    <p>Quản lý công việc hiệu quả</p>
  </div>
  {/* Input Section */}
  <div className="input-section">
    <div className="input-group">
      <input
        type="text"
        className="task-input"
        placeholder="Nhập công việc cần làm..."
        maxLength={100}
      />
      <button className="add-btn">➕ Thêm</button>
    </div>
    <div className="error-message">{/* Thông báo lỗi sẽ hiển thị ở đây */}</div>
  </div>
  {/* //! Empty State */}
  {/* <div className="empty-state">
    <div className="empty-state-icon">📋</div>
    <div className="empty-state-text">Chưa có công việc nào</div>
    <div className="empty-state-subtext">
      Hãy thêm công việc đầu tiên của bạn!
    </div>
  </div> */}

  {/* Todo List */}
  <div className="todo-list">

  </div>
  
  {/* Footer */}
  <div className="footer">
    <div className="task-counter">
      Đã hoàn thành: <span className="counter-number">2</span> /
      <span className="counter-number">6</span> công việc
    </div>
  </div>
</div>

    </>
  )
}

export default App
