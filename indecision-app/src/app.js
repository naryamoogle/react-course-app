console.log('App.js is running!');

//JSX -Javascript XML
//only render the subtitle (and p tage) if subtitle exist-logical and operator
//render new p tag- if options.length >0 "Here are your options" "no options"
var header = {
    title: 'INDECISION APP',
    subtitle: 'PUT YOUR LIFE IN THE HANDS OF A COMPUTER',
    options: ['One', 'Two']
};
var template = (
    <div>
        <h1>{header.title}</h1>
        {header.subtitle && <p>{header.subtitle}</p>}
        <p>{header.options.length > 0 ? 'Here are your options' : 'no options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
   </div>
);

var user = {
    name: 'Jeremy',
    age: 33,
    location: 'The Woodlands'
};

function getLocation(location){
    if(location){
        return <p>location {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);