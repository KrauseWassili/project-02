import { useEffect, useState } from "react";
import type { Category } from "../../types/Category_2";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [tempId, setTempId] = useState(0);
  const [message, setMessage] = useState("");

  //Функция запроса отображения всех категорий

  async function fetchCategories() {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories");

      if (!res.ok) {
        throw new Error("Failed to fetch categories. Status: " + res.status);
      }
      const data = await res.json();
      setCategories(data);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  }

  //Функция запроса удаления категории по ID

  async function fetchDeleteCategory(id: number) {
    try {
      const res = await fetch(
        `https://api.escuelajs.co/api/v1/categories/${id}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        throw new Error(
          "Failed to fetch delete categorie. Status: " + res.status
        );
      }
      const status = await res.text();
      if (status === "true") setTempId(0);
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
        console.log(message);
      }
    }
  }

  useEffect(() => {
    fetchCategories();
  }, [tempId]);

  //Отображаем кнопки подтверждения или отмены удаления
  if (tempId)
    return (
      <div>
        <h2>Are you sure?</h2>
        <button onClick={() => fetchDeleteCategory(tempId)}>Yes</button>
        <button onClick={() => setTempId(0)}>No</button>
      </div>
    );

  //Отображаем все категории в виде списка
  return (
    <div>
      <button
        onClick={() => {
          navigate("/categories/create");
        }}
      >
        Create new category
      </button>
      <h2>Categories</h2>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>
            <h3>Name: {c.name}</h3>
            <p>Slug: {c.slug}</p>
            <img src={c.image} alt={c.name} width="200px" />
            <button onClick={() => setTempId(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
