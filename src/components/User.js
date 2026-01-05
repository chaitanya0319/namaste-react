import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);

  useEffect(()=>{
    //let api="https://api.github.com/users/akshaymarch7"

  },[]);

  

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Bangalpet</h3>
      <h4>Contact: chiicodes</h4>
    </div>
  );
};

export default User;
