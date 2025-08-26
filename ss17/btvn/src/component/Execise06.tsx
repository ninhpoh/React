import { useState } from "react";

function CounText() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nhập văn bản:</h2>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Nhập gì đó..."
        style={{ width: "300px", padding: "8px"}}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}

export default CounText;