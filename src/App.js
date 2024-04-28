import './App.css';
import basic_components from './components/basic';

function App() {
  return (
    <div>
      <basic_components.header />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='p-2'>
            </div>
          </div>
          <div className='col-lg-8 pt-3'>
          <basic_components.post />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;