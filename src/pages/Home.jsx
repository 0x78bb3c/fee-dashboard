import Button from "../components/Button";
import "../css/Home.css";
import Modal from "../components/Modal";
import { useState } from "react";
import AddCourseModal from "../components/AddCourse";
import AddFeesModal from "../components/AddFees";

const data = [
    { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
    { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
    { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
    { course_name: "Course 1", pending_fees: 1000, total_fees: 1000 },
];

const HomePage = () => {
    const [feeModalIsOpen, setFeeModalOpen] = useState(false);
    const [courseModalIsOpen, setCourseModalOpen] = useState(false);

    return (
        <div className="main">
            <div className="u">
                <h1>Dashboard</h1>
                <div className="buttons">
                    <Button
                        bg={"#181818"}
                        onClick={() => {
                            setCourseModalOpen(!courseModalIsOpen);
                        }}
                    >
                        Add Course
                    </Button>
                    <Button
                        bg={"#181818"}
                        onClick={() => {
                            setFeeModalOpen(!feeModalIsOpen);
                        }}
                    >
                        Add Fee
                    </Button>
                </div>
            </div>
            <Modal open={feeModalIsOpen} onClose={() => setFeeModalOpen(false)}>
                <AddFeesModal courses={data} />
            </Modal>
            <Modal
                open={courseModalIsOpen}
                onClose={() => setCourseModalOpen(false)}
            >
                <AddCourseModal />
            </Modal>
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
