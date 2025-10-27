import { useEffect} from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {
  const {user, setUser} = useAuth();
  

  async function fetchProfile() {
    const token = localStorage.getItem("access_token");
    const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const currentUser = await res.json();
    setUser(currentUser);
   
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      Profile
      <p>{user?.email}</p>
    </div>
  );
}
