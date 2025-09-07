
import { Input } from 'antd';

const InputGroup = () => {
  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '24px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px',
      margin: 'auto'
    }}>
      <Input size="large" placeholder="Input cỡ lớn" />
      <Input placeholder="Input cỡ trung bình" />
      <Input size="small" placeholder="Input cỡ bé" />
    </div>
  );
};

export default InputGroup;