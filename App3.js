// Nested Sibling Tag

/*

    <div id = "root">
        <div id = "parent">
            <div id = "child1">
                <h1 id = "heading" xyz = "attribute">heading1</h1>
                <h2 id = "heading" xyz = "attribute">heading2</h2>
            </div>
            <div id = "child2">
                <h1 id = "heading" xyz = "attribute">heading1</h1>
                <h2 id = "heading" xyz = "attribute">heading2</h2>
            </div>
        </div>
    </div>
    
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading", xyz: "attribute" }, "heading1"),
    React.createElement("h2", { id: "heading", xyz: "attribute" }, "heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading", xyz: "attribute" }, "heading1"),
    React.createElement("h2", { id: "heading", xyz: "attribute" }, "heading2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
