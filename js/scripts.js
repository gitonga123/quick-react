let h1 = React.createElement('h1', null, 'Hello World');
let h2 = React.createElement('h2', null, 'Welcome to planet earth');
class HelloWorld extends React.Component {
    render() {
        return React.createElement('h1', this.props, 'Hello ' + this.props.frameworkName + ' World')
    }
}

ReactDOM.render(
   React.createElement(
       'div', null,
       React.createElement(HelloWorld, {
           id: 'ember',
           frameworkName: 'Ember.js',
           title: 'A framework for creating ambitious web applications'
       }),
       React.createElement(HelloWorld, {
           id: 'backbone',
           frameworkName: 'Backbone.js',
           title: 'Backbone.js gives structure to web applications...'
       }),
       React.createElement(HelloWorld, {
           id: 'angular',
           frameworkName: 'Angular.js',
           title: 'Superheroic JavaScript MVW Framework no puns intended'
       })), document.getElementById('content')
);