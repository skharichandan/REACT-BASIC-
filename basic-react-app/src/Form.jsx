function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return (
        <>
            <form action="">
            <input type="text" placeholder="write something"/>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>

         <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="write something"/>
            <button>Submit</button>
        </form>
        </>
        
    )
}