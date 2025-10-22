import { useEffect, useState } from "react";
import type { User } from "../../types/User";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [usersList, setUsersList] = useState<User[]>([]);

  async function handleFetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users");
    const arr = await res.json();

    setUsersList(arr);
  }

  useEffect(() => {
    handleFetchUsers();
  });

  return (
    <div>
      Users list
      <ul>
        {usersList?.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`}>
              <h3>{u.name}</h3>
              <img src={u.avatar} alt={u.name} width="200px" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
