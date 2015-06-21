'use strict';

var MenuBar = React.createClass({
    navstyle: {
        'backgroundColor': '#CCC',
        'width': '42.75em',
        'height': '1.3em', 
    },
    style: {
        'a': {
            'color': '#FFF',
            'font-family': 'Arial',
            'text-decoration': 'none',
        },
        'navigation__item': {
            'display': 'inline-block',
            'verticalAlign': 'center',
            'top': '0px',
            'margin': '0px 5px'
        },
        'navigation__dropdown': {
            'display':'none',
            'position':'absolute',
            'width':'60px',
            'text-align':'center',
            'backgroundColor':'#999',
            'padding':'0px',
            'margin':'0px'
        },
        'navigation__dropdown__link': {
            'listStyle':'none',
        },
        'navigation__dropdown--open': {
            'display':'block',
        },
    },
    getInitialState: function () {
        return {
            openDropdown: -1
        };
    },
    getDefaultProps: function () {
        return {
            config: []
        };
    },
    openDropdown: function (id) {
        // console.log('open!');
        this.setState({
            openDropdown: id
        });
    },
    closeDropdown: function () {
        this.setState({
            openDropdown: -1
        });
    },
    propTypes: {
        config: React.PropTypes.array
    },
    render: function () {
        var config = this.props.config;
        var style = this.style;
        console.log('MenuBarView.js: config: ', this.props)
        var items = config.map(function (item, index) {
            console.log('MenuBarView.jsx: item.id: ', item.id)
            var children, dropdown;
            if (item.children) {
                children = item.children.map(function (child) {
                    return (
                        <li key={ child.text } style={ style["navigation__dropdown__item"] }>
                            <a style={ style["navigation__dropdown__link"] } href='#!'>
                                { child.text }
                            </a>
                        </li>
                    );
                });

                var dropdownClass = 'navigation__dropdown';
                if (this.state.openDropdown === index) {
                    dropdownClass += ' navigation__dropdown--open';
                }
                
                // console.log(this.state.openDropdown, index);

                dropdown = (
                    <ul className={ dropdownClass }>
                        { children }
                    </ul>
                );
            }
            return (
                <li key={ item.text } style={ style["navigation__item"] } onMouseOut={ this.closeDropdown } onMouseOver={ this.openDropdown.bind(this, index) }>
                    <a style={style["navigation__link"]} href='#!'>
                        { item.text }
                    </a>

                    { dropdown }
                </li>
                );
        }, this);

        return (
            <div style={this.navstyle}>
                { items }
            </div>
            );
    }
});

// React.render(<MenuBar config={ menuitems } />, document.getElementById('jcgCapitalMenu'));
module.exports = MenuBar