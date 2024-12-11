import {createRoot} from 'react-dom/client';
let year = 25;
let greating = 
<div className="box">
    <h1 className="title"> Title </h1>
    <h1 style={{
        backgroundColor : 'blue',
        padding : 10,
        color : 'white',
        borderRadius : 10,
        border : '1px solid black',
        marginLeft : 10,
        marginTop : 10,
        fontFamily : 'Arial',
        fontSize : 20,

        }}>Hello i'm From React and i'm {year} years old</h1>
        <input type="text" placeholder='Enter Your Name'></input>
</div>;
const container = document.getElementById("root");
const root = createRoot(container);
root.render(greating);
