import { useLocation } from 'react-router-dom';
import { NavLink } from './NavLink';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex gap-6">
      <NavLink href="/" isActive={pathname === '/'}>Home</NavLink>
      <NavLink href="/setup" isActive={pathname === '/setup'}>Setup</NavLink>
    </nav>
  );
};
