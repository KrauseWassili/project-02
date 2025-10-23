import UserCard from "../../components/UserCard/UserCard";
import useUsers from "../../hooks/useUsers";

export default function UsersList() {
  const { users, message, loading } = useUsers();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (message) return { message };

  return (
    <div>
      Users list
      <ul>
        {users?.map((u) => (
          <UserCard user={u} key={u.id} />
        ))}
      </ul>
    </div>
  );
}
