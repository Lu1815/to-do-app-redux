import Home from './App/pages/Home';
import { router } from './App/routes/Index';
import { Button } from './ui/Button';
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
