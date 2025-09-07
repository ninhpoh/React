
import { Button, notification } from 'antd';


const ToastWarning = () => {
  const openToast = () => {
    notification.open({
      message: 'Cảnh báo',
      description: 'Lỗi kết nối máy chủ.',
      type: 'warning',
      placement: 'topRight',
      duration: 0,
      closeIcon: <span style={{ fontWeight: 'bold' }}>X</span>,
      style: {
        backgroundColor: '#facc15',
        border: '1px solid #f59e0b',
        color: '#000',
        borderRadius: '8px',
      },
    });
  };

  return (
    <Button type="primary" onClick={openToast}>
      Hiển thị Toast
    </Button>
  );
};

export default ToastWarning;