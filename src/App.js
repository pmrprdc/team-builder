import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import { Form, Input, DreamDiv } from "./StyledComponentsForApp"








function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DreamDiv>
            <h1>Test</h1>
        </DreamDiv>
        <img src={logo} className="App-logo" alt="logo" />
      <Form>
        <Input type="text" placeholder='First Name'/>
        <Input type="text" placeholder = 'LastName'/>
        <Input type= "submit" value="Add new Team Member"/>
      </Form>
       
      </header>
    </div>
  );
}

export default App;
