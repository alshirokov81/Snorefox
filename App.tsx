/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { Provider } from 'react-redux';
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';

import { store } from './src/app/store';
import { AppNavigated } from './src/containers/AppNavigated';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PopupRootProvider>
        <AppNavigated />
      </PopupRootProvider>
    </Provider>
  );
}

export default App;
