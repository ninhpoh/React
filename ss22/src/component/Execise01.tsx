
import { Button } from 'antd';

const ButtonGroup = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button type="primary">Lưu</Button>
      <Button>Hủy</Button>
      <Button type="primary" style={{ backgroundColor: '#22c55e', borderColor: '#22c55e' }}>
        Thành công
      </Button>
      <Button type="primary" style={{ backgroundColor: '#facc15', borderColor: '#facc15', color: '#000' }}>
        Cảnh báo
      </Button>
      <Button danger type="primary">Báo lỗi</Button>
      <Button type="primary" style={{ backgroundColor: '#38bdf8', borderColor: '#38bdf8' }}>
        Thông tin
      </Button>
      <Button type="default" style={{ borderColor: '#0ea5e9', color: '#0ea5e9' }}>
        Đường dẫn
      </Button>
    </div>
  );
};

export default ButtonGroup;