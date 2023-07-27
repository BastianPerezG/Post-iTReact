import { Notes } from "./Notes"
import { useState, useRef } from "react"
import { v4 as uuid } from 'uuid';

export const MyNotes = () => {


    const [notes, setNotes] = useState([
        {
            id: uuid(),
            title : "Note 1",
            description : "Note 1 description",
            important : false  
        },
        {
            id: uuid(),
            title : "Note 2",
            description : "Note 2 description",
            important : true
        },
        {
            id: uuid(),
            title : "Note 3",
            description : "Note 3 description",
            important : false
        },
        {
            id: uuid(),
            title : "Note 4",
            description : "Note 4 description",
            important : false
        },
        {
            id: uuid(),
            title : "Note 5",
            description : "Note 5 description",
            important : true
        }
    ])
    const titleRef = useRef()
    const descriptionRef = useRef()
    const importanRef = useRef()

    const [mensaje, SetMensaje] = useState("")
    
    const addNote = () => {

        if (notes.length >= 8) {
            SetMensaje("No se pueden agregar más de 8 notas");
            setTimeout(() => {
              SetMensaje("");
            }, 3000);
            return;
          }

        const title = titleRef.current.value
        const description = descriptionRef.current.value
        const important = importanRef.current.checked

        if(title.trim() === "" || description.trim()  === ""){
            SetMensaje("Debe llenar todos los campos")
            setTimeout(() => {
                SetMensaje("");},
                3000)
            return
        }
        
    
        const newNote = {
            id : uuid(),
            title : title,
            description : description,
            important : important
        }
        setNotes([...notes, newNote])
        
        titleRef.current.value = ""
        descriptionRef.current.value = ""  
    };

    const deleteNote = (id) => {

        const newNotes = notes.filter(note => note.id !== id)
        setNotes(newNotes)
        
    
    }
    return (
        <div className="container">
            <h1 className="text-center my-4">My Notes</h1>
            <div className="d-flex">
                <input ref={titleRef} type="text" placeholder="Titulo" className="form-control me-3"  />
                <input ref={descriptionRef} type="text" placeholder="Descripcion" className="form-control me-3" />
                <div className="form-check">
                    <input ref={importanRef} className="form-check-input me-3" type="checkbox"/>
                    <label className="form-check-label me-3" for="flexCheckChecked">
                        Important?
                    </label>
                </div>
                <button onClick={addNote} className="btn btn-success"><i class="bi bi-plus-circle"></i></button>
            </div>
            <div class="alert alert-danger my-3" role="alert" hidden={!mensaje}>
                {mensaje}
            </div>
            <div className="d-flex flex-wrap justify-content-around my-3 mb-3">
                {notes.length === 0 ? (<p>No hay Tareas Disponibles</p>) : (
                notes.map((note) => (<Notes key={note.id} note={note} deleteNote={deleteNote} />))
                )}
            </div>
        </div>
    )
}