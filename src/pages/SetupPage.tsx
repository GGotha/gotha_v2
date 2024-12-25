import { Setup } from '../components/Setup/Setup';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';

export const SetupPage = () => (
  <div className="bg-white min-h-screen">
    <Header />
    <main className="pt-16">
      <Setup />
    </main>
    <Footer />
  </div>
);
