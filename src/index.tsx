import * as React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const TextField = props => {
  return <input {...props} />;
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required()
});

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: ""
      }}
      validationSchema={schema}
      onSubmit={data => console.log(data)}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label>name</label>
            <TextField
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name}
          </div>
          <div>
            <label>email</label>
            <TextField
              type="text"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email}
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      )}
    </Formik>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
