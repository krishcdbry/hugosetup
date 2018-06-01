 

const dataBubble = [{
    "ax": "03/29/2017 10:00 AM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 11:00 AM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 10
}, {
    "ax": "03/29/2017 12:00 PM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 30
}, {
    "ax": "03/29/2017 1:00 PM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 2:00 PM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 3:00 PM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 10
}, {
    "ax": "03/29/2017 4:00 PM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 5:00 PM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 30
}, {
    "ax": "03/29/2017 6:00 PM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 7:00 PM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 8:00 PM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 30
}, {
    "ax": "03/29/2017 9:00 PM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 10:00 PM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/29/2017 11:00 PM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 12:00 AM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 1:00 AM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 10
}, {
    "ax": "03/30/2017 2:00 AM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 3:00 AM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 4:00 AM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 30
}, {
    "ax": "03/30/2017 5:00 AM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 6:00 AM",
    "ay": 6.1,
    "aValue": 5,
    "attempts": 10
}, {
    "ax": "03/30/2017 7:00 AM",
    "ay": 6.5,
    "aValue": 5,
    "attempts": 10
}, {
    "ax": "03/30/2017 8:00 AM",
    "ay": 6.3,
    "aValue": 5,
    "attempts": 20
}, {
    "ax": "03/30/2017 9:00 AM",
    "ay": 6.9,
    "aValue": 5,
    "attempts": 30
}];

const namesBubble = ["10 Attempts","20 Attempts","30 Attempts"]

class BubbleSample1 extends React.Component {
    constructor(){
        super();
    }
    render() {
        var data = JSON.stringify(dataBubble);
        var names = namesBubble;
        var xformat = 'date';
        var xtitle= 'Time';
        var ytitle= 'Title for Y'
        var properties = { data, names, xformat, xtitle, ytitle};
        var bubble = DnxBubble(properties);
        return (
             React.createElement('div', null, 
                bubble)
        );
    }
}

ReactDOM.render(
  React.createElement(BubbleSample1, null, null),
  document.getElementById('react-app1')
); 
