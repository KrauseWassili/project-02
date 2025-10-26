import { useState } from "react";
import { Field, Form, Formik } from "formik";
import type { Category } from "../../types/Category_2";
import { useNavigate } from "react-router-dom";
interface Values {
  name: string;
  image: string;
}

export default function CreateCategory() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<Category | undefined>(undefined);

  async function fetchCreateCategory(credentials: Values) {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products. Status: " + res.status);
      }
      const data = await res.json();
      setCategory(data);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  }
  return (
    <div>
      
      <button
        onClick={() => {
          navigate("/categories");
        }}
      >
        Back
      </button>
      <h3>Create new category:</h3>
      
      <Formik
        initialValues={{
          name: "",
          image: "",
        }}
        onSubmit={(values: Values) => {
          fetchCreateCategory(values);
        }}
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            id="name"
            type="text"
            placeholder="Type the name"
            size={40}
          />
          <label htmlFor="name">Image url:</label>
          <Field
            name="image"
            id="image"
            type="text"
            placeholder="Enter the image url"
            size={40}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {category ? (
        <>
          <h2>
            The new category with name "{category?.name}" was successfully
            created!
          </h2>
          <h2>Slug: {category?.slug}</h2>
          <img src={category?.image} alt={category?.name} width="200px" />
          <p>Id: {category?.id}</p>
        </>
      ) : null}
    </div>
  );
}
