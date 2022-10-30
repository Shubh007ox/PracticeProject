import './AddUserInput.css';
import React, {useState,useRef} from 'react';


const AddUserInput = (props) => {
  const nameInput = useRef();
  const ageInput = useRef();
  const collageInput = useRef();
  const [enterUsername,setUsername] = useState('')
  const [enterAge,setAge] = useState('')
  const [enterEmail,setEmail] = useState('')
  const AddUser = (event) => {
    event.preventDefault()
    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(collageInput.current.value);
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
          <input type="text" id="Username" className="input" value={enterUsername} onChange={usernameHandler} ref={nameInput}></input><br></br>
          <label htmlFor='age'className="input">Enter Age</label><br></br>
          <input type="number" id="age" value={enterAge}  onChange={AgeHandler} ref={ageInput}></input><br></br>
          <label htmlFor='text' className="input">College Name</label><br></br>
          <input type="text" id="text" value={enterEmail} onChange={EmailHandler} ref={collageInput}></input><br></br>
        <div>
          <button type="submit" id="button" className="button">LoGin</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserInput;
