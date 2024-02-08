
// chapter 1 : Basic
// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Helloworld from react !!!");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// chapter 2 :creating html elements in react 
{/* <div id="parent">
    <div id="child1">
        <h1>hi am h1</h1>
        <h2>hi am h2</h2>
    </div>
    <div id="child2">
        <h1>hi am h1</h1>
        <h2>hi am h2</h2>
    </div>
</div> */}


// converting the above html into react 


const parent = React.createElement("div",{id:"parent"},
[React.createElement('div',{id:"child1"},React.createElement("h1",{},'hi am h1')),React.createElement('div',{id:"child2"},React.createElement("h2",{},'hi am h2')),]

)
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)






