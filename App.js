import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id:"heading"},"Namaste React");

const jsxheading = <h1 id="heading" className="head">Namaste React using jsx</h1>

const elem = <span>React Element</span>
const Title = () => (<h1 id="heading" className="head">
    {elem}
    Namaste React using jsx</h1>);

const HeadingComponent = () =>{
    return <h1>Namaste React using Functional component</h1>
};

const HeadingComponent1 = () => (
<div id="container">
    <Title></Title>
    <Title/>
<h1>
     Namaste React using Functional component
    </h1>
    </div>);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);

root.render(<HeadingComponent1/>);