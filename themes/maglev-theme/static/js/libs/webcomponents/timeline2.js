 
const data2 = [{
    "date": "03/29/2017 10:00",
    "value": 2
}, {
    "date": "03/29/2017 10:05",
    "value": 2.5
}, {
    "date": "03/29/2017 10:10",
    "value": 3
}, {
    "date": "03/29/2017 10:15",
    "value": 3.5
}, {
    "date": "03/29/2017 10:20",
    "value": 4
}, {
    "date": "03/29/2017 10:25",
    "value": 4.5
}, {
    "date": "03/29/2017 10:30",
    "value": 5
}, {
    "date": "03/29/2017 10:35",
    "value": 4.5
}, {
    "date": "03/29/2017 10:40",
    "value": 4
}, {
    "date": "03/29/2017 10:45",
    "value": 3.5
}, {
    "date": "03/29/2017 10:50",
    "value": 3
}, {
    "date": "03/29/2017 10:55",
    "value": 2.5
}, {
    "date": "03/29/2017 11:00",
    "value": 2
}, {
    "date": "03/29/2017 11:05",
    "value": 1.5
}, {
    "date": "03/29/2017 11:10",
    "value": 1
}, {
    "date": "03/29/2017 11:15",
    "value": 8
}, {
    "date": "03/29/2017 11:20",
    "value": 2
}, {
    "date": "03/29/2017 11:25",
    "value": 9
}, {
    "date": "03/29/2017 11:30",
    "value": 4.5
}, {
    "date": "03/29/2017 11:35",
    "value": 3
}, {
    "date": "03/29/2017 11:40",
    "value": 1
}, {
    "date": "03/29/2017 11:45",
    "value": 9
}, {
    "date": "03/29/2017 11:50",
    "value": 1
}, {
    "date": "03/29/2017 11:55",
    "value": 1
}, {
    "date": "03/29/2017 12:00",
    "value": 1
}, {
    "date": "03/29/2017 12:05",
    "value": 3.5
}, {
    "date": "03/29/2017 12:10",
    "value": 3
}, {
    "date": "03/29/2017 12:15",
    "value": 2.5
}, {
    "date": "03/29/2017 12:20",
    "value": 2
}, {
    "date": "03/29/2017 12:25",
    "value": 1.5
}, {
    "date": "03/29/2017 12:30",
    "value": 1
}, {
    "date": "03/29/2017 12:35",
    "value": 1.5
}, {
    "date": "03/29/2017 12:40",
    "value": 2
}, {
    "date": "03/29/2017 12:45",
    "value": 2.5
}, {
    "date": "03/29/2017 12:50",
    "value": 3
}, {
    "date": "03/29/2017 12:55",
    "value": 3.5
}, {
    "date": "03/29/2017 13:00",
    "value": 2
}, {
    "date": "03/29/2017 13:05",
    "value": 2
}, {
    "date": "03/29/2017 13:10",
    "value": 5
}, {
    "date": "03/29/2017 13:15",
    "value": 4
}, {
    "date": "03/29/2017 13:20",
    "value": 3
}, {
    "date": "03/29/2017 13:25",
    "value": 2
}, {
    "date": "03/29/2017 13:30",
    "value": 2
}, {
    "date": "03/29/2017 13:35",
    "value": 3
}, {
    "date": "03/29/2017 13:40",
    "value": 2
}, {
    "date": "03/29/2017 13:45",
    "value": 5
}, {
    "date": "03/29/2017 13:50",
    "value": 4
}, {
    "date": "03/29/2017 13:55",
    "value": 4
}, {
    "date": "03/29/2017 14:00",
    "value": 2
}, {
    "date": "03/29/2017 14:05",
    "value": 2
}, {
    "date": "03/29/2017 14:10",
    "value": 5
}, {
    "date": "03/29/2017 14:15",
    "value": 4
}, { //Something needs to be passed (at least date), then equalSpacing works. If not pass here, create object in WC side.
    "date": "03/29/2017 14:20"//,
    //"value": 3
}, {
    "date": "03/29/2017 14:25"// ,
    //"value": 2
}, {
    "date": "03/29/2017 14:30"//,
    //"value": 2
}, {
    "date": "03/29/2017 14:35"//,
    //"value": 3
}, {
    "date": "03/29/2017 14:40",
    "value": 2
}, {
    "date": "03/29/2017 14:45",
    "value": 5
}, {
    "date": "03/29/2017 14:50",
    "value": 4
}, {
    "date": "03/29/2017 14:55",
    "value": 2
}];


class TimelineSample2 extends React.Component {
    constructor(){
        super();
    }
    render() {
        //var newArray = (data3[this.state.currentSub].subs === undefined) ? [] : data3[this.state.currentSub].subs;
        //var data = JSON.stringify(data3);
        var data = JSON.stringify(data2);
        var collapsed=true;
        var sliders=false;
        var minperiod='5mm'
        var properties = { data, collapsed, sliders, minperiod };
        var timeline = DnxTimelineS(properties);
        return (
             React.createElement('div', null, 
                timeline)
        );
    }
}

ReactDOM.render(
  React.createElement(TimelineSample2, null, null),
  document.getElementById('react-app2')
); 
