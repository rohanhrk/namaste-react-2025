/*
  <div id = "root">
    <h1 id = "heading" xyz = "attribute">Hello World from React!</h1>
  </div>
*/

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "atribute" },
  "Hello World from React!"
); 

console.log(heading); // React.createElement returned an object  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // Render function take the React element object and converts the object to h1 tag and put this inside to the Broser DOM
