// Nested Tag

/*

    <div id = "root">
        <div id = "parent">
            <div id = "child">
                <h1 id = "heading" xyz = "attribute">Hello World from React!</h1>
            </div>
        </div
    </div>
    
*/

const parent = React.createElement(
  "dev",
  { id: "parent" },
  React.createElement(
    "dev",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading", xyz: "attribute" },
      "Hello World from Nested React!"
    )
  )
); 

console.log(parent); // Return object 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 