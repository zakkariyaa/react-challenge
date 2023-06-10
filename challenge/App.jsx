import Greeting from './Greeting.jsx';
import Shouter from './Shouter.jsx';
import MouseTracker from './MouseTracker.jsx';

function App() {
  return (
    <main>
      <p>Hi</p>
      <Greeting name={'oli'} />
      <Shouter />
      <MouseTracker />
    </main>
  );
}

export default App;
