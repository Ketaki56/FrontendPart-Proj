import axios from "axios";
import React from "react";
import { unmountComponentAtNode } from "react-dom";

function WorkerRegis(){

const Worker={
    id:"",
    name:"",
    address:""
}

const[worker, setWorker]=React.useState(Worker)
const[workerData, setWorkerData]=React.useState([])



const handleChange=(event)=>{
    setWorker({...worker,[event.target.name]:event.target.value})

}

//Below(function saveData) function is called api function / call api
function saveData(){
    axios.post("http://localhost:8080/saveWorker", worker)
    .then(response=>response.data)
    .then(res=>{
        console.log(res)
    }
        
)}

    return(
        <div>

            <h1>Worker Information Form</h1>
            Id:
            <input type='text' onChange={handleChange} name='id'></input>

            Name:
            <input type='text' onChange={handleChange} name='name'></input> <br></br>

            Address:
            <input type='text' onChange={handleChange} name='address'></input> <br></br>

            <button type="button" onClick={saveData}>Submit</button>

        </div>
    )
    }
export default WorkerRegis