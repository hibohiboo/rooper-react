import * as React from 'react';
import MastermindCardContainer from '../containers/MastermindCardContainer';
import InputForm from './InputForm/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

const App = () => (
  <div>
    <InputForm />
    <MastermindCardContainer />
  </div>
);

// Needed for onTouchTap
injectTapEventPlugin();

const MuiApp =()=>(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

export default MuiApp;


