import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const CategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  image: Yup.string()
    .min(2, "Too Short!")
    .url("Must be valid URL")
    .required("Required"),
});
export const CreateCategory = () => {
  const navigate = useNavigate();
  const fetchCreateCategories = async (values: {
    name: string;
    image: string;
  }) => {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Create Category</h1>
      <Formik
        initialValues={{
          name: "",
          image: "",
        }}
        validationSchema={CategorySchema}
        validateOnChange={false}
        onSubmit={(values) => {
          fetchCreateCategories(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="image" />
            {errors.image && touched.image ? <div>{errors.image}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};