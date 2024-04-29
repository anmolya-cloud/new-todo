import { useState } from "react";

export function CreateTodo(props){
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");
    
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="tittle" onChange={function (e){
            const value = e.target.value;
            setDescription(e.target.value);

        }} ></input><br></br>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description"></input><br></br>
       
       
        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() =>{
            fetch("https://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    tittle:"",
                    description: ""
                }),
                headers:{
                    "content-type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added")
            })
        }}> Add a todo </button>
    </div>
}