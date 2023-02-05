import logo from './logo.svg';
import './App.css';
import { Form, Input, DreamDiv, Member } from "./StyledComponentsForApp"
import React, { useState } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

const initialDreamTeam = ["Elon Musk", "Ray Kurzweil", "Post Malone"]


function App() {

const [dreamTeam, setDreamTeam] = useState(initialDreamTeam)
const [formValues, setFormValues] = useState({firstName: "", lastName: ""})

const updateForm =(evt)=>{
  evt.preventDefault()
  setFormValues(previousValues =>{
    return {...previousValues, [evt.target.name]:evt.target.value}
  })
  
}

const handleSubmit = (evt) => {
  evt.preventDefault();
  const newMember = `${formValues.firstName} ${formValues.lastName}`
 setDreamTeam(oldDreamTeam =>{
  return [...oldDreamTeam, newMember]
 })

 setFormValues({firstName:"", lastName:""})

}
  
  return (
    <div className="App">
      <header className="App-header">
        <DreamDiv>
            <h1>Dream Team</h1>
        </DreamDiv>
        {dreamTeam.map((member, idx)=>{
          return(
            <Member key={idx}>
              <h1>{member}</h1>
            </Member>
          )
        })}
        <img src={logo} className="App-logo" alt="logo" />
      <Form onSubmit={handleSubmit}>
        <Input autoFocus value ={formValues.firstName}name ="firstName" onChange={updateForm} type="text" placeholder='First Name'/>
        <Input value={formValues.lastName} name ="lastName" onChange={updateForm}type="text" placeholder = 'LastName'/>
        <Input type= "submit" value="Add new Team Member"/>
      </Form>
       
      </header>
    </div>
  );
}

export default App;
