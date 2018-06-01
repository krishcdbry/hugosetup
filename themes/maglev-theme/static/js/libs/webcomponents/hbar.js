 
const datahbar = [{
    "date": "03/29/2017 10:00",
    "values": [2000]
}, {
    "date": "03/29/2017 11:00",
    "values": [5000]
}, {
    "date": "03/29/2017 12:00",
    "values": [3000]
}, {
    "date": "03/29/2017 13:00",
    "values": [4000]
}];

const nameshbar = ["Label 1"]

class HBarSample1 extends React.Component {
    constructor(){
        super();
    }
    render() {
        var data = JSON.stringify(datahbar);
        var names = nameshbar;
        var xformat = 'date';
        var properties = { data, names, xformat};
        var bar = DnxHBar(properties);
        return (
             React.createElement('div', null, 
                bar)
        );
    }
}

ReactDOM.render(
  React.createElement(HBarSample1, null, null),
  document.getElementById('react-app1')
); 
