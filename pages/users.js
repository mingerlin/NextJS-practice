import User from "../components/user";

function UsersList({ users }) {
  return (
    <>
      <div>Lists of users</div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}
export default UsersList;

export async function getStaticProps() {
  const response = await fetch(
    "https://my-json-server.typicode.com/mingerlin/typicode/users"
  );
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
