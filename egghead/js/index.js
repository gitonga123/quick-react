const rootElement = document.getElementById('root');
const element = React.createElement('div', {className: "container", children: "Hello World"});
ReactDOM.render(element,rootElement);