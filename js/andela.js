// component is a js class/function that optionally
// accepts inputs i.e props and returns a react element that
// describes how a section of the ui should appear
// const Greeting = (props) => <h1>Hello {props.name}!</h1>; //functional component
// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('content')
// );
class Greeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}
Greeting.defaultProps = {
    name: "user"
};
ReactDOM.render(<Greeting/>, document.getElementById('content'));