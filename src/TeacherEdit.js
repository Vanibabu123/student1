import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TeacherEdit() {
  let params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      let user = await axios.get(
        `https://61f4ac6310f0f7001768c99b.mockapi.io/Teachers/${params.id}`
      );
      formik.setValues(user.data);
    }
    fetchData();
  }, []);
  let formik = useFormik({
    initialValues: {
      teachername: "",
      class: 0,
      age: 0,
      place: "",
      salary: 0,
      joindate: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.teachername) {
        errors.teachername = "Teacher Name should not be blank";
      }
      if (!values.class) {
        errors.class = "Class should not be blank";
      }
      if (!values.age || values.age < 18) {
        errors.age = "Age should not be blank and should be greater than 18";
      }
      if (!values.place) {
        errors.place = "Place should not be blank ";
      }
      if (!values.salary) {
        errors.salary = "Salary should not be blank";
      }
      if (!values.joindate) {
        errors.joindate = "Join Date should not be blank";
      }
      return errors;
    },
    onSubmit: async (values) => {
      await axios.put(
        `https://61f4ac6310f0f7001768c99b.mockapi.io/Teachers/${params.id}`,
        values
      );
      navigate("/teacher", { replace: true });
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="text-center">Edit Teachers Details</h1>
        <div className="row">
          <div className="col-lg-6">
            <label>Teacher Name</label>
            <input
              type={"text"}
              name="teachername"
              onChange={formik.handleChange}
              value={formik.values.teachername}
              className="form-control"
              style={{
                border: formik.errors.teachername ? "1px solid red" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.teachername}</span>
          </div>
          <div className="col-lg-6">
            <label>Class</label>
            <input
              type={"number"}
              name="class"
              onChange={formik.handleChange}
              value={formik.values.class}
              className="form-control"
              style={{ border: formik.errors.class ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.class}</span>
          </div>
          <div className="col-lg-6">
            <label>Age</label>
            <input
              type={"number"}
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              className="form-control"
              style={{
                border: formik.errors.age ? "1px solid red" : "",
              }}
            />
            <span style={{ color: "red" }}>{formik.errors.age}</span>
          </div>
          <div className="col-lg-6">
            <label>Place</label>
            <input
              type={"text"}
              name="place"
              onChange={formik.handleChange}
              value={formik.values.place}
              className="form-control"
              style={{ border: formik.errors.place ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.place}</span>
          </div>
          <div className="col-lg-6">
            <label>Salary</label>
            <input
              type={"text"}
              name="salary"
              onChange={formik.handleChange}
              value={formik.values.salary}
              className="form-control"
              style={{ border: formik.errors.salary ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.salary}</span>
          </div>
          <div className="col-lg-6">
            <label>Join Date</label>
            <input
              type={"date"}
              name="joindate"
              onChange={formik.handleChange}
              value={formik.values.joindate}
              className="form-control"
              style={{ border: formik.errors.joindate ? "1px solid red" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.joindate}</span>
          </div>
          <div className="col-lg-6 mt-3">
            <input
              disabled={Object.keys(formik.errors).length !== 0}
              type={"submit"}
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherEdit;
