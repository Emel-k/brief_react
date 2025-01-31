//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function MyForm () {
    const [text,setText] = useState("")
    console.log(text)
    const [todo,setTodo] = useState([])

    function add(){
        setTodo([...todo,text])
        setText('')
        document.querySelector(".searchbar").value = ""
    }

    return (
        <div>
            <label>
                <input className="searchbar" placeholder="Tapez ce que vous voulez faire dans la journée"
                       onChange={e => setText(e.target.value)} />
            </label>

            <button className="btn-search" onClick={add}>
                Ceci est un bouton
            </button>

            <ul>
                {todo.map((item, id) => (
                    <li key={id}>
                        {item}
                        <button className="delete" >supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



function App() {
    return (
        <div className="container">
            <h1>
            Ma To Do list Moche
            </h1>
            <div className="align_thing">
                <MyForm />

            </div>

        </div>
    )
}

export default App;
