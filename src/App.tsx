import useFetch from "./hooks/useFetch";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function App() {
  const [todo, isTodoLoading, toDoError] = useFetch<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  const [users, areUsersLoading, usersError] = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <>
      <br />
      <br />
      {!!toDoError && toDoError}
      {isTodoLoading && "Loading..."}
      {!isTodoLoading && !toDoError && <div>{JSON.stringify(todo)}</div>}

      <br />
      <br />
      {!!usersError && usersError}
      {areUsersLoading && "Loading..."}
      {!areUsersLoading && !usersError && <div>{JSON.stringify(users)}</div>}

      {/* {error ? (
        error
      ) : isLoading ? (
        "Loading..."
      ) : (
        <div>{JSON.stringify(todo)}</div>
      )} */}
    </>
  );
}
