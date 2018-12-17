// const element = React.createElement('div', {className: "container", children: "Hello World"});
const rootElement = document.getElementById('root');

const Message = props => <div>{props.children}</div>

const element = (
    <div className="container">
       <Message>
            Hello World
            <Message>Goodye World</Message>
        </Message>
    </div>
)

ReactDOM.render(element, rootElement);