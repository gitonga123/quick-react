// const element = React.createElement('div', {className: "container", children: "Hello World"});
const rootElement = document.getElementById('root');

class Message extends React.Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

ReactDOM.render(<Message children="Hello World"/>, rootElement);