import { useSelector } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import Modal from './components/modal/modal';

function App() {


  const {openModal} = useSelector(state => state.postsReducer)
    return (
        <div className="App">
            {openModal ? <Modal /> : undefined}
            <Header />
            <Menu />
        </div>
  );
}

export default App;
