
class TableHeaderSample extends React.Component {
    constructor() {
        super();
        this._onRefresh = this._onRefresh.bind(this);
        this._onExport = this._onExport.bind(this);
        this._onAdd = this._onAdd.bind(this);
    }
    _onRefresh(event) {
        alert('refreshing ...');
    }
    _onExport(event) {
        alert('exporting...');
    }
    _onAdd(event){
        alert('adding...');
    }
    render() {
        var onRefresh = this._onRefresh;
        var onExport = this._onExport;
        var onAdd = this._onAdd;
        var Tablename = 'Table Name';
        var Lastupdated = 'Lasat Updated 10 min ago';
        var properties = { onRefresh, onExport, onAdd, Tablename, Lastupdated }
        return React.createElement('div', null, DnxTableHeader(properties), React.createElement('hr', null));
    }
}

ReactDOM.render(
  React.createElement(TableHeaderSample, null, null),
  document.getElementById('react-app')
);