import Navigation from "./navigation";
import { Provider } from 'react-redux';
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

const App: React.FC = () => {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;