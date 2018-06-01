 

const datal1 = [{
    "date": "03/29/2017 10:00",
    "values": [2, 2, 1]
}, {
    "date": "03/29/2017 11:00",
    "values": [1, 2, 2]
}, {
    "date": "03/29/2017 12:00",
    "values": [3, 3, 3]
}, {
    "date": "03/29/2017 13:00",
    "values": [4, 4, 4]
}, {
    "date": "03/29/2017 14:00",
    "values": [2, 2, 2]
}, {
    "date": "03/29/2017 15:00",
    "values": [4, 5, 5]
}, {
    "date": "03/29/2017 16:00",
    "values": [5, 6, 6]
}];

const names1 = ["Label 1", "Label 2", "Label 3"]

class AreaSample1 extends React.Component {
    constructor(){
        super();
    }
    render() {
        var data = JSON.stringify(datal1);
        var names = names1;
        var area = true;
        var xtitle= 'Time';
        var ytitle= 'Title for Y'
        var properties = { data, names, area, xtitle, ytitle };
        var line = DnxTimelineT(properties);
        return (
             React.createElement('div', null, 
                line)
        );
    }
}

ReactDOM.render(
  React.createElement(AreaSample1, null, null),
  document.getElementById('react-app1')
); 
