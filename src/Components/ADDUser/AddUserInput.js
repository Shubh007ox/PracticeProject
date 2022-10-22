import './AddUserInput.css';
import React, {useState} from 'react';
import Card from './Wrapper/Card';


const AddUserInput = (props) => {
  const [enterUsername,setUsername] = useState('')
  const [enterAge,setAge] = useState('')
  const [enterEmail,setEmail] = useState('')
  const AddUser = (event) => {
    event.preventDefault()
    if(enterUsername.trim().length === 0 || enterAge.trim().length === 0 || enterEmail.trim().length === 0){
      return;
    }
    props.onAddUser(enterUsername,enterAge,enterEmail);
    setUsername('')
    setAge('')
    setEmail('')
    

  }
  function usernameHandler(event){
    setUsername(event.target.value)
  }
  function AgeHandler(event){
    setAge(event.target.value)
  }
  function EmailHandler(event){
    setEmail(event.target.value)
  }
  return (
    <div className='input-details'>
      <form onSubmit={AddUser}>
          <label htmlFor='Username'className="input">Username</label><br></br>
          <input type="text" id="Username" className="input" value={enterUsername} onChange={usernameHandler}></input><br></br>
          <label htmlFor='age'className="input">Enter Age</label><br></br>
          <input type="number" id="age" value={enterAge}  onChange={AgeHandler}></input><br></br>
          <label htmlFor='Email' className="input">Email</label><br></br>
          <input type="email" id="Email" value={enterEmail} onChange={EmailHandler}></input><br></br>
        <div>
          <button type="submit" id="button" className="button">LoGin</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserInput;
