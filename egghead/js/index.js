// const element = React.createElement('div', {className: "container", children: "Hello World"});
// proptypes is used for production
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


class SayHelloAsClass extends React.Component {
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }

    render() {
        const {firstName, lastName} = this.props
        return (
            <div>
                Hello {firstName} {lastName}
            </div>
        )
    }
}

ReactDOM.render(
    <SayHello firstName={true} />, rootElement    
)