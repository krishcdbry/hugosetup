 

const datab2 = [{
    "date": "03/29/2017 10:00",
    "values": [2, 1, 3]
}, {
    "date": "03/29/2017 11:00",
    "values": [5, 2, 3]
}, {
    "date": "03/29/2017 12:00",
    "values": [3, 3, 1]
}, {
    "date": "03/29/2017 13:00",
    "values": [4, 5, 3]
}, {
    "date": "03/29/2017 14:00",
    "values": [5, 3, 2]
}, {
    "date": "03/29/2017 15:00",
    "values": [3, 2, 1]
}, {
    "date": "03/29/2017 16:00",
    "values": [3, 1, 3]
}];

const namesb2 = ["Label 1", "Label 2", "Label 3"]

class BarSample2 extends React.Component {
    constructor(){
        super();
    }
    render() {
        var data = JSON.stringify(datab2);
        var names = namesb2;
        var rotate = true;
        var stack = 'regular';
        var xformat = 'date';
        var xtitle= 'Time';
        var ytitle= 'Title for Y'
        var properties = { data, names, rotate, stack, xformat, xtitle, ytitle };
        var bar = DnxBar(properties);
        return (
             React.createElement('div', null, 
                bar)
        );
    }
}

ReactDOM.render(
  React.createElement(BarSample2, null, null),
  document.getElementById('react-app2')
); 
