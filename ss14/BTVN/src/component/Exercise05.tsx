import React, { Component } from 'react';

class Exercise05 extends Component {
  state = {
    productCode: '',
    productName: '',
    price: '',
    quantity: ''
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { productCode, productName, price, quantity } = this.state;

    const productData = {
      productCode,
      productName,
      price: parseFloat(price),
      quantity: parseInt(quantity)
    };

    console.log(productData);

    this.setState({
      productCode: '',
      productName: '',
      price: '',
      quantity: ''
    });
  };

  render() {
    const { productCode, productName, price, quantity } = this.state;

    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm:</label><br />
            <input
              type="text"
              name="productCode"
              value={productCode}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Tên sản phẩm:</label><br />
            <input
              type="text"
              name="productName"
              value={productName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Giá:</label><br />
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Số lượng:</label><br />
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    );
  }
}

export default Exercise05;