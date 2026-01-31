function handleClick(){
    console.log("Hello!");
}

function handleMouseOver(){
    console.log("Bye!");
}
function handleDblClick(){
    console.log("You Double Clicked Me");
}

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me !</button>
            <p onMouseOver={handleMouseOver}>This parah is for event demo</p>
            <button onDoubleClick={handleDblClick}>Double Click Me!</button>
        </div>
    );
}