import { NavLink } from './NavLink';

export const Navigation = () => {
  const currentPath = window.location.pathname;

  return (
    <nav className="flex gap-6">
      <NavLink href="/" isActive={currentPath === '/'}>Home</NavLink>
      <NavLink href="/setup" isActive={currentPath === '/setup'}>Setup</NavLink>
    </nav>
  );
};
