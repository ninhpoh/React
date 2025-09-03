import React, { useState, useEffect } from "react";

function PageTitle() {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.trim()) {
      document.title = `Chao! tieu de cua ${input}!`;
    } else {
      document.title = "Chào mừng bạn đến với trang của chúng tôi!";
    }
  })

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Chào mừng bạn đến với trang của chúng tôi!</h2>
      <input
        type="text"
        placeholder="Nhập tên của bạn..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "100%", maxWidth: "300px" }}
      />
    </div>
  );
}

export default PageTitle;