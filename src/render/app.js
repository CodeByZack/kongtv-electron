import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Store from '@render/store';
import Home from '@render/page/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = (props) => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Store.Provider>
            <Switch>
              {/* <Route path="/play" component={PlayMovie} />
              <Route path="/detail" component={MovieDetail} />
              <Route path="/search/:query" component={MovieSearch} />
              <Route path="/search" component={MovieSearch} /> */}
              <Route path="/" component={Home} />
            </Switch>
        </Store.Provider>
      </BrowserRouter>
    </>
  );
};
export default App;
