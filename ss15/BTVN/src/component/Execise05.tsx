import React, { Component } from "react";

// Định nghĩa kiểu cho student
interface Student {
  id: string;
  name: string;
  birthDate: string;
  email: string;
  status: string;
}

// StudentRow Component for each table row
interface StudentRowProps {
  index: number;
  student: Student;
  onEdit: (student: Student) => void;
  onDelete: (id: string) => void;
}

const StudentRow: React.FC<StudentRowProps> = ({ index, student, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.birthDate}</td>
      <td>{student.email}</td>
      <td>{student.status}</td>
      <td>
        <button onClick={() => onEdit(student)}>Chỉnh</button>
        <button onClick={() => onDelete(student.id)}>Xóa</button>
      </td>
    </tr>
  );
};

// StudentTable Component
interface StudentTableState {
  students: Student[];
  currentPage: number;
  itemsPerPage: number;
}

class StudentTable extends Component<{}, StudentTableState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      students: [
        { id: "SV001", name: "Nguyen Van A", birthDate: "21/12/2023", email: "nva@gmail.com", status: "Đang học" },
        { id: "SV002", name: "Nguyen Thi B", birthDate: "21/11/2022", email: "ntb@gmail.com", status: "Nghỉ học" },
      ],
      currentPage: 1,
      itemsPerPage: 2,
    };
    // Bind methods
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddStudent = this.handleAddStudent.bind(this);
  }

  handleEdit(student: Student) {
    alert(`Editing student: ${student.name}`);
    // Add edit logic here
  }

  handleDelete(id: string) {
    this.setState((prevState) => ({
      students: prevState.students.filter((student) => student.id !== id),
    }));
  }

  handleAddStudent() {
    alert("Add new student functionality to be implemented");
    // Add new student logic here
  }

  render() {
    const { students, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(students.length / itemsPerPage);

    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <button onClick={this.handleAddStudent}>Thêm mới sinh viên</button>
        <table  style={{ borderCollapse: "collapse", width: "100%", }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Trạng thái</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <StudentRow
                key={student.id}
                index={index}
                student={student}
                onEdit={this.handleEdit}
                onDelete={this.handleDelete}
              />
            ))}
          </tbody>
        </table>
        <div>
          <button disabled={currentPage === 1} onClick={() => this.setState({ currentPage: currentPage - 1 })}>
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => this.setState({ currentPage: page })}
              style={{ fontWeight: currentPage === page ? "bold" : "normal" }}
            >
              {page}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => this.setState({ currentPage: currentPage + 1 })}>
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

// Main Execise05 Component
class Execise05 extends Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Quản lý sinh viên</h1>
        <StudentTable />
      </div>
    );
  }
}

export default Execise05;
