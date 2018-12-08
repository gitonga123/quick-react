// component is a js class/function that optionally
// accepts inputs i.e props and returns a react element that
// describes how a section of the ui should appear
// const Greeting = () => <h1>Hello World today!</h1>; //functional component
// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('content')
// );
class Greeting extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<Greeting/>, document.getElementById('content'));