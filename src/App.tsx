import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { SetupPage } from './pages/SetupPage';

function App() {
  const path = window.location.pathname;

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="pt-16">
        {path === '/' && <HomePage />}
        {path === '/setup' && <SetupPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
