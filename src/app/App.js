import React from 'react';
import log from 'loglevel';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';

import Sidebar from 'd2-ui/lib/sidebar/Sidebar.component';

import injectTapEventPlugin from 'react-tap-event-plugin';
const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Application

class App extends React.Component {
    getChildContext() {
        return {
            d2: this.props.d2,
        };
    }

    _sidebarItemClicked(sideBarItemKey) {
        log.info('Clicked on ', sideBarItemKey);
    }

    render() {
        const sideBarSections = [
            { key: 'item1', label: 'Item 1' },
            { key: 'item2', label: 'Item 2' },
        ];

        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="app-wrapper">
                    <HeaderBar />
                    <Sidebar
                        sections={sideBarSections}
                        onChangeSection={this._sidebarItemClicked}
                    />
                    <div className="main-content">{`Hello, ${this.props.name}! Your app skeleton set up correctly!`}</div>
                </div>
            </MuiThemeProvider>
        );
    }
}

App.childContextTypes = {
    d2: React.PropTypes.object,
    name: React.PropTypes.string,
};

App.childContextTypes = {
    d2: React.PropTypes.object,
};

App.defaultProps = {
    name: 'John'
};

export default App;
