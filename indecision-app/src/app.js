console.log('App.js is running!');

//JSX -Javascript XML
var header = {
    title: 'INDECISION APP',
    subtitle: 'PUT YOUR LIFE IN THE HANDS OF A COMPUTER',
};
var template = (
    <div>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
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
        return location;
    }else{
        return 'Unknown';
    }

}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);