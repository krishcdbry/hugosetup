const data3 = [{
    title: "Android",
    value: 40,
    subs: [{
        title: "Samsung",
        value: 20
    }, {
        title: "HTC",
        value: 10
    }, {
        title: "Samsung",
        value: 5
    }, {
        title: "Other",
        value: 5
    }]
}, {
    title: "Windows",
    value: 20
}, {
    title: "Print",
    value: 20,
    subs: [{
        title: "Samsung",
        value: 10
    }, {
        title: "HTC",
        value: 10
    }]
}, {
    title: "Other",
    value: 20
}];

const internaltext3=[{
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

class PieChartSample3 extends React.Component {
    constructor(){
        super();
        this._onClickSlice = this._onClickSlice.bind(this);
        this.state = { currentSub: 0 };
    }
    _onClickSlice(event){
        console.log(event);
        this.setState({ currentSub: event.detail.data });
    }
    render() {
        var newArray = (data3[this.state.currentSub].subs === undefined) ? [] : data3[this.state.currentSub].subs;
        var data = JSON.stringify(data3);
        var internaltext=internaltext3;
        var legendposition='bottom' ;
        var labels=false;
        var width='550px';
        var height='400px';
        var callouttext='[[title]]: [[value]]%'
        var tooltiptext='[[title]]: [[value]]%'
        var onClickSlice = this._onClickSlice;
        var properties = { data, internaltext, legendposition, labels, width, height, onClickSlice, callouttext, tooltiptext};
        var piechart = DnxDoubleDonut(properties);
        //React.createElement('br',null)
        console.log(newArray);
        return (
            
            React.createElement('div', {style: {display: 'inline-block', position: 'relative', marginRight: '5.25em'}}, 
                piechart, 
                    React.createElement('div', {style: {fontFamily: 'CiscoSans', fontSize: '14px', color: '#999999', top: '0px', position: 'absolute', left: '490px'}}, 
                    newArray.map((item, key) => {
                    return (
                        React.createElement('div',null, item.title)  
                    );
                })
                ))
        );
    }
}

ReactDOM.render(
  React.createElement(PieChartSample3, null, null),
  document.getElementById('react-app3')
); 
