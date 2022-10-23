import { useEffect, useState } from "react";
import AddCourseModal from "../components/AddCourse";
import AddFeesModal from "../components/AddFees";
import Button from "../components/Button";
import Modal from "../components/Modal";
import "../css/Home.css";

const HomePage = () => {
    const [courses, setCourses] = useState([]);
    const [feeModalIsOpen, setFeeModalOpen] = useState(false);
    const [courseModalIsOpen, setCourseModalOpen] = useState(false);

    const get_data = () => {
        fetch("http://localhost:8080/course/get/all", { mode: "cors" })
            .then((res) => res.json())
            .then((json) => {
                setCourses(json);
            });
    };

    useEffect(() => {
        get_data();
    }, []);

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
                        {courses.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.title}</td>
                                    <td>{val.pending_fee}</td>
                                    <td>{val.total_fee}</td>
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
