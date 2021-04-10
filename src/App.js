import React, { useContext } from "react";
import './App.css'
import Header from "./components/Header";
import WalletForm from "./components/WalletForm";
import NOWallet from "./components/NOWallet";
import WalletComponent from "./components/WalletComponent";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { StateContext } from "./State";

export default function App() {
  const [state] = useContext(StateContext);

  return (
    <Router>
      <Switch>
        <div className="App">
          <div className="custRow">
            <div className="asideMenu">
              <Header />
            </div>
            <div className="content">
              <Route path="/" exact>
                <NOWallet />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/walletform">
                <WalletForm />
              </Route>
              <Route path="/wallet/:name">
                {state.wallets.length === 0 ? (
                  <Redirect to="/" />
                ) : (
                  <WalletComponent />
                )}
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
}