//import logo from "./logo.svg";
import "./App.css";
// import Button from "./components/button"
import { useState } from "react";
import FormStudent from "./components/student/FormStudent.js"

function App() {
  // const [count, setCount] = useState(0);

  // const onPlus = () => {
  //   setCount(count + 1);
  // };

  // const onMinus = () => {
  //   setCount(count - 1);
  // };

  // let buttonData = [];
  // for (let i = 1; i < 10; i++) {
  //   buttonData.push(i);
  // }

  // const renderTextCount = () => {
  //   return <p>Count time: {count}</p>;
  // };

  // const showAlert = (message) => {
  //   alert(message);
  // };

  // const renderButton = (textButton, onClick, index) => {
  //   return (
  //     <button key={`${index}`} className="button-count" onClick={onClick}>
  //       <p>{textButton}</p>
  //     </button>
  //   );
  // };

  // const renderButtonNumber = (button) => {
  //   return (
  //     <button key={`${button}`} className="button-count" onClick={() => setCount(button)}>
  //       <p>{button}</p>
  //     </button>
  //   );
  // };
  // constructor(props) {
  //   super(props);
  //   this.state = {value: ''};

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // const handleChange(event) {
  //   this.setState({value: event.target.value});
  // }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || phone === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div className="success" style={{display: submitted ? '' : 'none',}}>
        <h3>User {name} submit successfully !!</h3>
      </div>
    );
  };
  const errorMessage = () => {
    return (
      <div className="error" style={{display: error ? '' : 'none',}}>
        <h3>User {name} submit error </h3>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Form Student</h1>
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-student">
          <div className="name-student">
            <label>Name: </label>
            <FormStudent className ="name" type="text" onChange={handleName}  value={name}/>
          </div>
          <div className="email-student">
            <label>Email: </label>
            <FormStudent className ="email" type="text" onChange={handleEmail} value={email}/>
          </div>
          <div className="phone-student">
            <label>Phone: </label>
            <FormStudent className ="phone" type="number" onChange={handlePhone} value={phone}/>
          </div>
          <input type="submit" value="submit" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
    );
 
}

export default App;
