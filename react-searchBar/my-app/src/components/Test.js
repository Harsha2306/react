import { useEffect, useState } from "react";

const Test = () => {
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [input, setInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setLoadedUsers(data);
        setFilteredUsers(data);
      });
    setIsloading(false);
  }, []);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    setFilteredUsers(loadedUsers);
    if (!e.target.value) 
      return;
    setFilteredUsers(
      loadedUsers.filter((user) => user.name.includes(e.target.value))
    );
  };

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {!isLoading && (
        <>
          <input value={input} onChange={inputChangeHandler} />
          <ul>
            {filteredUsers.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Test;
