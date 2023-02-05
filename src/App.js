import logo from './logo.svg';
import './App.css';
import styled from "styled-components"



const Form = styled.form`
background-color: green;
width: 50%;
border-radius: 20px;
`
const Input = styled.input`
background-color: pink;
border-radius: 5px;`


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Form>
        <Input type="text" />
      </Form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
