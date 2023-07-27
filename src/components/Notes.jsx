

export const Notes = ({note, deleteNote}) => {
    const {id, title, description, important} = note;

    const removeNote = () => deleteNote(id);
    if (important){
        return (
            <div className="card bg-danger text-light mb-3" style={{ width: "22%"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{title}</h5>
                        <button onClick={removeNote} className="btn"><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>      
        )
    }
    else {
        return (
            <div className="card bg-warning-subtle mb-3"  style={{ width: "22%"}}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h5 className="card-title">{title}</h5>
                        <button onClick={removeNote} className="btn"><i className="bi bi-x"></i></button>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
            </div>      
        )
    }
}