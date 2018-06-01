const data2 = [{
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

const internaltext2=[{
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

class PieChartSample2 extends React.Component {
    constructor(){
        super();
        this._onClickSlice = this._onClickSlice.bind(this);
    }
    _onClickSlice(event){
        console.log(event);
    }
    render() {
        var data = JSON.stringify(data2);
        var internaltext=internaltext2;
        var maintitle= 'Pie Chart Title';
        var legendposition='bottom' ;
        var labels=false;
        var callouttext='[[title]]: [[value]]%'
        var tooltiptext='[[title]]: [[value]]%'
        var width='550px';
        var height='400px';
        var onClickSlice = this._onClickSlice;
        var properties = { data, internaltext, legendposition, labels, width, height, callouttext, tooltiptext, onClickSlice};
        var piechart = DnxDonut(properties);
        return (
            React.createElement('div', null, 
                piechart)
        );
    }
}

ReactDOM.render(
  React.createElement(PieChartSample2, null, null),
  document.getElementById('react-app2')
); 
