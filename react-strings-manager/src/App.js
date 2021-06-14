import StringsManager from './StringsManager';
import Swagger from './Swagger';

function App() {
  return window.location.search === '?swagger'
    ? <Swagger />
    : <StringsManager />;
}

export default App;
