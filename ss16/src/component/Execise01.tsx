import React, { Component } from "react";
export default class Exercise01 extends Component{
const Exercise01 = () => {
  const subject = ["Toán", "Văn", "Anh", "Lý", "Hóa"];

  return (
    <div style={{width:`400px`}} className="d-flex flex-column bd-highlight mb-3 align-items-center text-center bg-dark  text-white">
      <h2 className="p-2 bd-highlight  ">Danh sách môn học</h2>
      <ul className="p-2 bd-highlight gap-3" style={{width:`300px`}}>
        {subject.map((item) => (
          <ol className="p-2 bg-primary" style={{margin:`10px`, padding:`10px`,borderRadius:`10px`}}>{item}</ol>
        ))}
      </ul>
    </div>
  );
};
}
;