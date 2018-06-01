 

const datal1A = [{
    "date": "03/29/2017 10:00",
    "values": [2, 2, 1]
}, {
    "date": "03/29/2017 11:00",
    "values": [5, 2, 3]
}, {
    "date": "03/29/2017 12:00",
    "values": [4, 3, 2]
}, {
    "date": "03/29/2017 13:00",
    "values": [3, 5, 1]
}, {
    "date": "03/29/2017 14:00",
    "values": [4, 3, 2]
}, {
    "date": "03/29/2017 15:00",
    "values": [2, 2, 5]
}, {
    "date": "03/29/2017 16:00",
    "values": [3, 4, 2]
}];

const names1A = ["Label 1", "Label 2", "Label 3"]

class TimelineSample1A extends React.Component {
    constructor(){
        super();
    }
    render() {
        var data = JSON.stringify(datal1A);
        var names = names1A;
        var xtitle= 'Time';
        var ytitle= 'Title for Y';
        var customballoon= true;
        var minperiod = 'hh'
        var properties = { data, names, xtitle, ytitle, customballoon, minperiod };
        var line = DnxTimelineT(properties);
        return (
             React.createElement('div', null, 
                line)
        );
    }
}

ReactDOM.render(
  React.createElement(TimelineSample1A, null, null),
  document.getElementById('react-app1A')
); 
