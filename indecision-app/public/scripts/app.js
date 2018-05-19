'use strict';

console.log('App.js is running!');

//JSX -Javascript XML
var header = {
    title: 'INDECISION APP',
    subtitle: 'PUT YOUR LIFE IN THE HANDS OF A COMPUTER'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        header.title
    ),
    React.createElement(
        'p',
        null,
        header.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Jeremy',
    age: 33,
    location: 'The Woodlands'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        getLocation(user.location)
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
