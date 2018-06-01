

class ShowMoreSample extends React.Component {
    constructor() {
        super();
        this._onMore = this._onMore.bind(this);
        this.state = { dataLength: 10 };
    }
    _onMore(event){
        const n = event.detail.currentChunk;
        alert("React is ready to retrieve new set of data -> " + n*10 + " rows");
        this.setState({ dataLength: n*10})
    }
    render() {
        var onMore = this._onMore;
        var dataLength= this.state.dataLength ;
        var dataSize = 100;
        var properties = { onMore, dataLength, dataSize };
        
        return React.createElement('div', null, DnxTableFooter(properties), React.createElement('hr', null));
    }
}

ReactDOM.render(
  React.createElement(ShowMoreSample, null, null),
  document.getElementById('react-app')
); 