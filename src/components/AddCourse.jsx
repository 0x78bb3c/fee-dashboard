const InputStyles = {
    boxSizing: "border-box",
    display: "inline-block",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "12px 20px",
    margin: "8px 0",
};

const AddCourseModal = () => {
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
                    Add Course
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
                <form action="http://localhost:8080/course/new" method="POST">
                    <label htmlFor="cname">Course Name</label>
                    <input
                        type="text"
                        id="cname"
                        name="course"
                        style={InputStyles}
                    />

                    <label htmlFor="tfees">Total Fee</label>
                    <input
                        type="number"
                        id="tfees"
                        min={0}
                        name="total_fee"
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

export default AddCourseModal;
