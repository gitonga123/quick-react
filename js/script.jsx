// ReactDOM.render(
//     <h1>Hello World</h1>,
//     document.getElementById('content')
// );

let helloWorld = <h1>Hello World</h1>;
ReactDOM.render(
    helloWorld, document.getElementById('content')
);

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello KENYA</h1>
                <h2>How are you doing?</h2>
            </div>
        )
    }
}
ReactDOM.render(<HelloWorld />, document.getElementById('content'))