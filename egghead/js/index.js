// const element = React.createElement('div', {className: "container", children: "Hello World"});

const rootElement = document.getElementById('root');

function SayHello(props) {
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>
    )
}

SayHello.propTypes = {
    firstName (props, propName, componentName) {
        if (typeof props[propName] !== 'string') {
            return new Error(`Pass string name for ${propName}`)
        }
    }
}

SayHello.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}

ReactDOM.render(
    <SayHello firstName={true} />, rootElement    
)