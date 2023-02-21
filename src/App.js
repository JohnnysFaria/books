import './App.css';
import Logo from './componentes/Logo/index';
import OpcoesHeader from './componentes/OpcoesHeader/index';
import IconesHeader from './componentes/IconesHeader/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <OpcoesHeader />
        <IconesHeader />
      </header>
    </div>
  );
}

export default App;
