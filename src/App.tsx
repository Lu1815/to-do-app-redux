import Home from './App/pages/Home';
import ContactCard from './ui/ContactCard';

function App() {
  return (
    <div className="App container mx-auto">
      <Home />
      <ContactCard contactName='Jhon Doe' contactImage='https://example.com/avatar.jpg' />
    </div>
  );
}

export default App;
