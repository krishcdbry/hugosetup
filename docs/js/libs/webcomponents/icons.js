class IconSample extends React.Component {
    constructor() {
        super();
        this._onClick = this._onClick.bind(this);
    }
    _onClick() {
        window.alert('clicked')
    }
    render() {
        
        var name = 'dna-filter' ;
        var properties = { name };
        
        var click = this._onClick;
        var propertiesButton = { click }
        var icon = DnxIcon(properties);
        return (
            React.createElement('div', null, 
                icon)
        );
    }
}

ReactDOM.render(
  React.createElement(IconSample, null, null),
  document.getElementById('react-app')
); 