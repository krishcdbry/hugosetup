

class TableSearchSample extends React.Component {
    constructor() {
        super();
        this._onDOMChange = this._onDOMChange.bind(this);
        this.state = { dataLength: 10 };
    }
    _onDOMChange(event) {
        console.log(event.detail.data);
    }
    render() {
        var onDOMChange = this._onDOMChange;
        var Placeholder = 'Find';
        var properties = { onDOMChange, Placeholder };
        return React.createElement('div', null, DnxTableSearch(properties), React.createElement('hr', null));
    }
}

ReactDOM.render(
  React.createElement(TableSearchSample, null, null),
  document.getElementById('react-app')
); 