import React, { Component } from 'react';
import axios from 'axios';

import Header from './component/Header'
import TabelBTC from './component/TabelBTC'
import RpToBtc from './component/RpToBtc'
import BtcToRp from './component/BtcToRp'

class App extends Component {

  render() {
    return (


      <div>
        <Header />

        <div>
          <div id="btc">
            <TabelBTC />
          </div>

          <div id="konvBtc">
            <RpToBtc />
          </div>

          <div id="konvRp">
            <BtcToRp />
          </div>


        </div>
      </div>



    )
  }
}
export default App;