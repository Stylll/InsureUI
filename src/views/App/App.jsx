import React from 'react';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import Homepage from '../Homepage/Homepage';
import Footer from '../../components/Footer/Footer.component';
import store from '../../redux/store';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './styles.scss';

const App = () => (
  <div>
    <div className="App">
      <Provider store={store}>
        <ReduxToastr
            timeOut={4000}
            newestOnTop
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr}
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick/>
        <Homepage />
      </Provider>
    </div>
    <Footer />
  </div>
);
export default App;
