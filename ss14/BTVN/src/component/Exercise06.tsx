import React, { useState } from 'react';

function GenderForm() {
  const [gender, setGender] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gender) {
      setResult(`${gender}`);
    } else {
      setResult('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Giới tính: {result || ''}
      </label><br />
      <input
        type="radio"
        name="gender"
        value="Nam"
        checked={gender === 'Nam'}
        onChange={(e) => setGender(e.target.value)}
      /> Nam<br />
      <input
        type="radio"
        name="gender"
        value="Nữ"
        checked={gender === 'Nữ'}
        onChange={(e) => setGender(e.target.value)}
      /> Nữ<br />
      <input
        type="radio"
        name="gender"
        value="Khác"
        checked={gender === 'Khác'}
        onChange={(e) => setGender(e.target.value)}
      /> Khác<br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default GenderForm;