import "./App.css";
import React, { useState } from "react";

function App() {
  const [Toggle, setToggle] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    Department: "",
    Rating: "",
    employees: [],
  });

  const changeHandler = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.log({ [e.target.name]: [e.target.value] });
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("submitHandler called");
    // console.log(formData);

    const arr = {
      Name: formData.Name,
      Department: formData.Department,
      Rating: formData.Rating,
    };

    let temp = formData.employees;
    temp.push(arr);
    setFormData({ ...formData, employees: temp });
    console.log(formData.employees);
    setToggle(false);
  };

  const displayHandler = () => {
    setToggle(true);
  };

  return (
    <div className="App">
      <h1 className="title">EMPLOYEE FEEDBACK DATA</h1>
      {Toggle ? (
        <form>
          <label className="name">Name : </label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <label className="dept">Department : </label>
          <input
            type="text"
            name="Department"
            value={formData.Department}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <label className="ratg">Rating : </label>
          <input
            type="number"
            name="Rating"
            value={formData.Rating}
            onChange={changeHandler}
            required
          ></input>
          <br />
          <br />
          <button className="btn btn-warning btn1" onClick={submitHandler}>
            Submit
          </button>
          {/*HTML Button is of type SUBMIT*/}
        </form>
      ) : (
        <>
          <div className="mainbox container">
            {formData.employees.map((value, index) => {
              return (
                <span className="container box1" key={index}>
                  <span>
                    Name : {value.Name} | Department : {value.Department} |
                    Rating : {value.Rating}
                  </span>
                </span>
              );
            })}
          </div>
          <br />
          <button className="btn btn-warning btn2" onClick={displayHandler}>
            GO BACK
          </button>
        </>
      )}
    </div>
  );
}

export default App;
// import React, { useState } from 'react'

// function App() {
//   var a = 0; // local variable
  
//   const [b,setb] = useState(0); // allows to create a state variable 


//   function localIncrease()
//   {
//     a++;
//     console.log('localIncrease Called' + a)
//   }

//   function stateIncrease()
//   {
//     setb(b+1);
//     console.log('stateIncrease Called' + b)
//   }

//   return (
//     <>
//         {a}
//         <br/>
//         <button onClick={localIncrease}>localIncrement</button>
//         <br/>
//         {b}
//         <br/>
//         <button onClick={stateIncrease}>stateIncrement</button>
//     </>
//   )
// }

// export default App 


// import React ,{Component} from  'react'
// function onChnageEventFunction(parameter){
//   console.log(parameter.target.name)
// }

// export class App extends Component{
//   state={
//     value:0
//   }
//   render(){
//     return (
//       <>
//         <input type="text" name="some" onChange={onChnageEventFunction} />
//       </>
//     )
//   }
// }

// export default App

// import React, { useState } from 'react'


// function App() {
//   //toggle 
//   const [toggle ,setToggle] = useState(false)

//   //for storing all form data
//   const [formData,setFormData]=useState(
//     {
//       Name2:"",
//       Department:"",
//       Raring:"",
//     }
//   )
//   //Array for storing all entries made into the form
//   const [allFormData,setAllFormData]=useState([])
//   return (
//   <>

//   </>
//   )
// }


// ­­­import React, { Component } from 'react'
// import React from './App.Css';

// export default class App extends Component {
//   // Golden rule : State can only be changed using setState()
//   state = {
// //  key  : value   
//     Name2 : "",
//     Department : "",
//     Rating : "",
//     employees : []
//   };

//   changeHandler = (e) =>
//   {
//     this.setState({[e.target.name] : e.target.value});
//   }

//   submitHandler = (e)=>
//   {
//     console.log("Submit Handler Called")
//     const empObj = 
//     {
//       Name : this.state.Name2,
//       Department : this.state.Department,
//       Rating : this.state.Rating,
//     }
//     const arr = this.state.employees;
//     arr.push(empObj);
//     this.setState({employees : arr})
//   }

//   render() {
//     return (
//       <div>
//         <h1>EMPLOYEE FEEDBACK FORM</h1>
//         <form>        
//           <label htmlFor='Name'>Name : </label>
//           <input type="text" name="Name2" value={this.state.Name} onChange={this.changeHandler}></input>
//           <br/>
//           <label>Department : </label>
//           <input type="text" name="Department" value={this.state.Department}  onChange={this.changeHandler}></input>
//           <br/>
//           <label>Rating : </label>
//           <input type="number" name='Rating' value={this.state.Rating}  onChange={this.changeHandler}></input>
//           <br/>

//           <button type="button" onClick={this.submitHandler}>Submit</button>
//         </form>
        
//         <div>
//           {this.state.employees.map((value,index)=>
//           {
//             return(
//               <span key={index}>{value.Name} {value.Department} {value.Rating}</span>
//             )
//           }
//           )}
//         </div>

//       </div>

//     )
//   }
// }
