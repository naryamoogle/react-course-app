'use strict';

console.log('App.js is running!');

//JSX -Javascript XML
//only render the subtitle (and p tage) if subtitle exist-logical and operator
//render new p tag- if options.length >0 "Here are your options" "no options"
var header = {
    title: 'INDECISION APP',
    subtitle: 'PUT YOUR LIFE IN THE HANDS OF A COMPUTER',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        header.title
    ),
    header.subtitle && React.createElement(
        'p',
        null,
        header.subtitle
    ),
    React.createElement(
        'p',
        null,
        header.options.length > 0 ? 'Here are your options' : 'no options'
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
        return React.createElement(
            'p',
            null,
            'location ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
