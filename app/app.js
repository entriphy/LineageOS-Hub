import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from "react-router-dom"
import MiniDrawer from "./components/AppBar"
import { MuiThemeProvider } from "material-ui/styles";
import Theme from "./components/Theme"
import SwipeableViews from "react-swipeable-views";

export default class App extends React.Component {
    state = {
      
    }
    render() {
      console.log(MiniDrawer.refs)
        return (
          <MiniDrawer>
            <SwipeableViews>
              <div ref="homepage">
                <iframe src="https://lineageos.org" style={{width: "100%", height: "100%"}} />
              </div>
            </SwipeableViews>
          </MiniDrawer>
        )
    }
}

ReactDOM.render((
    <HashRouter>
      <Route exact path="/" component={App}/>
    </HashRouter>
), document.getElementById('root'));