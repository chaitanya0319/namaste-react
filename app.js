// const heading= React.createElement("h1",{},"Hellow world from the React!");


// const parent= React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I am an h1 tag"))
//     );
//     const root=ReactDOM.createRoot(document.getElementById("root"));


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("h1",{"id":"child"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ]),
    React.createElement("div",{"id":"child2"},[
        React.createElement("h1",{},"I am a h1 tag"),
        React.createElement("h2",{},"I am a h2 tag"),
    ]),
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);

    console.log(parent);