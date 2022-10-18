import Button from "../components/Button";
import "../css/Home.css";

const data = [
  { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
  { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
  { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
  { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
];

const HomePage = () => {
  return (
    <div className="main">
      <div className="u">
        <h1>Dashboard</h1>
        <div className="buttons">
          <Button bg={"#181818"} onClick={() => {}}>
            Add Course
          </Button>
          <Button bg={"#181818"} onClick={() => {}}>
            Add Fee
          </Button>
        </div>
      </div>
      <div className="b">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Pending Fee</th>
              <th>Total Fee</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.course_name}</td>
                  <td>{val.pending_fees}</td>
                  <td>{val.total_fees}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
