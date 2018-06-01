const data1 = [{
    title: "Android",
    value: 40
}, {
    title: "Windows",
    value: 20
}, {
    title: "Print",
    value: 20
}, {
    title: "Other",
    value: 20
}];

const internaltext1=[{
    position: "54%",
    size: 12,
    bold: true,
    text: 'Internal Title',
    color: '#58585b'
},{
    position: "42%",
    size: 32,
    bold: false,
    text: '1234',
    color: '#58585b'
}]

class PieChartSample1 extends React.Component {
    constructor(){
        super();
        this._onClickSlice = this._onClickSlice.bind(this);
    }
    _onClickSlice(event){
        console.log(event);
    }
    render() {
        var data = JSON.stringify(data1);
        var internaltext=internaltext1;
        var maintitle= 'Pie Chart Title';
        var legendposition='bottom' ;
        var width='550px';
        var height='400px';
        var labels=true;
        var callouttext='[[title]]: [[value]]%'
        var tooltiptext='[[title]]: [[value]]%'
        var onClickSlice = this._onClickSlice;
        var properties = { data, internaltext, legendposition, labels, width, height, onClickSlice, callouttext, tooltiptext};
        var piechart = DnxDonut(properties);
        return (
            React.createElement('div', null, 
                piechart)
        );
    }
}

ReactDOM.render(
  React.createElement(PieChartSample1, null, null),
  document.getElementById('react-app1')
); 
