import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';

import NavigationContainer from './src/navigation'
import store from './src/store/store';

import { Provider } from 'react-redux'

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } 
    
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer/>
      </SafeAreaProvider>
    </Provider>
    );
  
}
