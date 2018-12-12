// ReactDOM.render(
//     <h1>Hello World</h1>,
//     document.getElementById('content')
// );

// let helloWorld = <h1>Hello World</h1>;
// ReactDOM.render(
//     helloWorld, document.getElementById('content')
// );

class HelloWorld extends React.Component {
    render() {
        let dateTimeNow = new Date().toLocaleString();
        return (
            <div>
                <h1>Hello KENYA</h1>
                <h2>How are you doing?</h2>
                <h3>Current Date Time = {dateTimeNow}</h3>
            </div>
        )
    }
}

class ProfileLink extends React.Component {
    render() {
        return <a href={this.props.url}
                  title={this.props.label}
                  target="_-blank">
        </a>
    }
}
// ReactDOM.render(<ProfileLink url='google.com'/>, document.getElementById('links'));
class WorldHello extends React.Component {
    render() {
        return <h1 {...this.properties}>
            Hello {this.props.frameworkName} world!!
        </h1>
    }
}

ReactDOM.render(
    <div>
        <WorldHello
            id='ember'
            frameworkName='Ember.js'
            title='A framework for creating ambitious web applications.'/>
        <WorldHello
            id='backbone'
            frameworkName= 'Backbone.js'
            title= 'Backbone.js gives structure to web applications...'/>
        <WorldHello
            id= 'angular'
            frameworkName= 'Angular.js'
            title= 'Superheroic JavaScript MVW Framework'/>
    </div>, document.getElementById('content')
);
ReactDOM.render(<ProfileLink url='www.google.com' label='Google Home Page' />, document.getElementById('link'));