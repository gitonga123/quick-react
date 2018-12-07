let h1 = React.createElement('h1', null, 'Hello World');
let h2 = React.createElement('h2', null, 'Welcome to planet earth');
class HelloWorld extends React.Component {
    render() {
        return React.createElement('div', null, h1, h2)
    }
}

ReactDOM.render(
   React.createElement(
       'div', null,
       React.createElement(HelloWorld),
       React.createElement(HelloWorld),
       React.createElement(HelloWorld)), document.getElementById('content')
);