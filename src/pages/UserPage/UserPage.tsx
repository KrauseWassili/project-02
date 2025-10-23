import { useEffect, useState } from "react";
import type { User } from "../../types/User";
import { useParams } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUserData(id: string) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUserData(id || "");
  }, []);
  return (
    <div>
      User page
      user ?
      <h2>{user?.name}</h2> 
      <img src={user?.avatar} alt={user?.name} width="200px" /> 
      <p>id: {user?.id}</p>
      <p>role: {user?.role}</p>
      <p>email: {user?.email}</p>
      <p>creation at: {user?.creationAt}</p>
      <p>updated at: {user?.updatedAt}</p>
      : null
    </div>
  );
}
