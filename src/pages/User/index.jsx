import React, { useEffect, useState } from "react";
import api from "../../api";
import "./style.scss";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api().getUsers();
      console.log({data});
      setUsers(data);
    };
    getData();
  },[]);

  return users.length ? (
    <div className="home__links">
      {users.map((user) => {
        return(<>
          <ul>{user.name}</ul>
          <ul>{user.city}</ul>
          <ul>{user.address}</ul>
        </>);
      })}
    </div>
  ) : (
    <div className="home__loading">
      <h1>Loading...</h1>
    </div>
  );
}

export default User;
