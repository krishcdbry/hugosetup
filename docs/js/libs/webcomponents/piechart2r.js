const data2r = [{
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

const internaltext2r=[{
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

class PieChartSample2r extends React.Component {
    constructor(){
        super();
        this._onClickSlice = this._onClickSlice.bind(this);
    }
    _onClickSlice(event){
        console.log(event);
    }
    render() {
        var data = JSON.stringify(data2r);
        var internaltext=internaltext2r;
        var legendposition='right' ;
        var labels=false;
        var width='450px';
        var height='400px';
        var onClickSlice = this._onClickSlice;
        var callouttext='[[title]]: [[value]]%'
        var tooltiptext='[[title]]: [[value]]%'
        var properties = { data, internaltext, legendposition, labels, width, height, callouttext, tooltiptext, onClickSlice};
        var piechart = DnxDonut(properties);
        return (
            React.createElement('div', null, 
                piechart)
        );
    }
}

ReactDOM.render(
  React.createElement(PieChartSample2r, null, null),
  document.getElementById('react-app2r')
); 
