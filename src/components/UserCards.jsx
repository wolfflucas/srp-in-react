import { useFetchUsers } from "../hooks/useFetchUsers";
import "../index.css";
import { Loading } from "./Loading";
import { UserCard } from "./UserCard";

const UserCards = () => {
  const { users, isLoading } = useFetchUsers();

  return (
    <section className="section">
      {isLoading ? (
        <Loading />
      ) : (
        users.map((user) => <UserCard key={user.id} user={user} />)
      )}
    </section>
  );
};

export { UserCards };
