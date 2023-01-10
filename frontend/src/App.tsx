
import { BrowserRouter } from 'react-router-dom'
import {RoutesGroup} from './routes'
import BookstoreContextProvider from './context/context'
import {Footer} from './components/FOOTER/footer'
import './App.css';

function App() {
  return (
    <BookstoreContextProvider>
<BrowserRouter>
<RoutesGroup />
<Footer />
</BrowserRouter>
</BookstoreContextProvider>
  );
}

export default App;
