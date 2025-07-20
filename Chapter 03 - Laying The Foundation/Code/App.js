import React from "react";
import ReactDOM from "react-dom/client";

/*
    <h1 id = "heading">heading<h1>
*/

/* 1. How create h1 heading using React */

// Creating h1 heading using react
// return object
// Not a developer friendly
const reactHeading = React.createElement(
  "h1",
  { id: "heading" },
  "heading from react"
);


/* 2. How to create h1 tag using JSX */

// creating heading using JSX
// JSX -> Not HTML in JS
// return object
// Developer Friendly -> Readable for human
// JSX (Transpiled before it reaches to the JS Engine) -> Babel
// Babel -> It converts the JSX code so that the browser or JS engine can understand
const JSXHeading = <h1 id="heading">Heading from JSX</h1>;

/*
    3. React Component
    i) Functional React Component
    ii) Class Based React Component
*/

// i) Functional Component

const HeaderComponent = () => {
  return <h1>This is Functional Component</h1>;
};

// Note: We can also return JSX like this below which is same as above component code
const HeaderComponent1 = () => <h1>This is Functional Component</h1>;

// 4. Component composition -> Component inside component
const ReactComponent1 = () => (
  <div className="child">
    <h1>This is React Component</h1>
  </div>
);

const ReactComponent2 = () => {
    return (
        <div>
            <ReactComponent1/>
        </div>
    )
}

// 5. We can write any JavaScript code inside {}

const Comp = () => {
    return (
        <div>
            {console.log("Writing JavaScript code inside React Component")}
            <h1>This is React Component</h1>
        </div>
    )
}

/*
    6. We can call react component in three ways
    i) <Comp /> -> Does not contain child component
    ii) {Comp()} -> At the end of the day, react component is a normal JS function
    iii) <Comp></Comp> -> Contain child component
*/

const element = (
    <div>
        <Comp/>
        {Comp()}
        <Comp></Comp>
    </div>
)

// How to render React Element and React Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXHeading);
root.render(<HeaderComponent />);
root.render(<ReactComponent2 />);
root.render(element);

