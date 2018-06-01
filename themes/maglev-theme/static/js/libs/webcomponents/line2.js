 

const datal2 = [{
    "date": "03/29/2017 10:00",
    "values": [2, 2, 1]
}, {
    "date": "03/29/2017 11:00",
    "values": [6, 2, 4]
}, {
    "date": "03/29/2017 12:00",
    "values": [6, 3, 2]
}, {
    "date": "03/29/2017 13:00",
    "values": [5, null, 1]
}, {
    "date": "03/29/2017 14:00",
    "values": [4, 5, 2]
}, {
    "date": "03/29/2017 15:00",
    "values": [2, 2, 7]
}, {
    "date": "03/29/2017 16:00",
    "values": [3, 4, 7]
}];

const names2 = ["Label 1", "Label 2", "Label 3"]

class LineSample2 extends React.Component {
    constructor(){
        super();
    }
    render() {
        //var newArray = (data3[this.state.currentSub].subs === undefined) ? [] : data3[this.state.currentSub].subs;
        var data = JSON.stringify(datal2);
        var names = names2;
        var topValue = [4, 5, 4, 5, 4, 5, 4];
        var bottomValue= [1, 2, 1, 2, 1, 2, 1];
        var topname= 'Top Value Threshold'
        var bottomname= 'Bottom Value Threshold'
        var xtitle= 'Time';
        var ytitle= 'Title for Y';
        var redzoneposition= 'top';
        console.log(names);
        var properties = { data, names, topValue, bottomValue, topname, bottomname, xtitle, ytitle, redzoneposition };
        var timeline = DnxTimelineT(properties);
        return (
             React.createElement('div', null, 
                timeline)
        );
    }
}

ReactDOM.render(
  React.createElement(LineSample2, null, null),
  document.getElementById('react-app2')
); 
