import logo from './logo.svg';
import './App.css';
import { Form, Input, DreamDiv } from "./StyledComponentsForApp"
import React, { useState } from 'react';

const initialDreamTeam = ["Elon Musk", "Ray Kurzweil", "Post Malone"]


function App() {

const [dreamTeam, setDreamTeam] = useState(initialDreamTeam)


  return (
    <div className="App">
      <header className="App-header">
        <DreamDiv>
            <h1>Dream Team</h1>
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
