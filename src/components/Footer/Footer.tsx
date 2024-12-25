import { SocialLinks } from './SocialLinks';

export const Footer = () => (
  <footer className="bg-gray-50">
    <div className="container mx-auto px-6">
      <SocialLinks />
      <p className="text-center text-gray-600 pb-8">
        © {new Date().getFullYear()} Gustavo Gotha. All rights reserved.
      </p>
    </div>
  </footer>
);
