const InputStyles = {
    boxSizing: "border-box",
    display: "inline-block",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "12px 20px",
    margin: "8px 0",
};

const AddFeesModal = ({ courses }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "500px",
            }}
        >
            <div>
                <h1
                    style={{
                        width: "100%",
                        fontSize: "2rem",
                        marginLeft: "10px",
                    }}
                >
                    Add Fees
                </h1>
            </div>
            <div
                style={{
                    marginLeft: "10px",
                    marginTop: "15px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <form action="">
                    <label htmlFor="course">Select Course</label>
                    <select id="course" name="course name" style={InputStyles}>
                        {courses.map((val, key) => {
                            return (
                                <option key={key} value={val.course_name}>
                                    {val.course_name}
                                </option>
                            );
                        })}
                    </select>

                    <label htmlFor="fee">Fee</label>
                    <input
                        type="number"
                        id="fee"
                        min={0}
                        name="fee"
                        style={InputStyles}
                    />
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <input
                            type="submit"
                            value="Submit"
                            style={{
                                background: "#181818",
                                alignSelf: "flex-end",
                                borderRadius: "10px",
                                borderStyle: "none",
                                height: "50px",
                                width: "140px",
                                color: "white",
                                cursor: "pointer",
                                margin: "15px 0 10px 0",
                                fontSize: "1em",
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddFeesModal;
