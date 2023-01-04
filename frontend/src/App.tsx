
import { BrowserRouter } from 'react-router-dom'
import {RoutesGroup} from './routes'
import {Footer} from './components/FOOTER/footer'
import './App.css';

function App() {
  return (
<BrowserRouter>
<RoutesGroup />
<Footer />
</BrowserRouter>
  );
}

export default App;
