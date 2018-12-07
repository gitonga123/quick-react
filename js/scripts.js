
let h1 = React.createElement("h1", null, "Hello world!");
let h2 = React.createElement("h2", null, "Welcome to planet earth");
ReactDOM.render(
    React.createElement('div', null, h1, h2),
    document.getElementById('content')
);