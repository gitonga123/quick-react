const rootElement = document.getElementById('root');
// const element = React.createElement('div', {className: "container", children: "Hello World"});
const greeting = "Hello There";
const myClassName = "container";
const props = {
    className: 'container',
    children: 'Hello World'
}
const element = <div {...props}/>
ReactDOM.render(element,rootElement);