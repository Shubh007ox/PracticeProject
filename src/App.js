import AddUserInput from "./Components/ADDUser/AddUserInput";
import React, {useState} from "react";
import UserList from "./Components/ADDUser/UserStored";

function App() {
  const [enteredList,setList] = useState([]);
  function addUserHandler(Name,Age,Email){
    setList((prevList) => {
      return [...prevList, {name:Name,age:Age,email:Email}]
    });

  }
  return (
    <div>
      <AddUserInput onAddUser={addUserHandler} />
      <UserList users={enteredList} />

    </div>
  );
}

export default App;
