import './App.css';
import Main from './components/main/Main'
import Feature from './components/feature/Feature';
import Showcase from './components/showcase/Showcase';
import SlackBot from './components/slack-bot/SlackBot';
import Description from './components/description/Description';
import NavBar from './components/navbar/NavBar.js';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Feature/>
      <Showcase/>
      <SlackBot/>
      <Description/>
    </div>
  );
}

export default App;
