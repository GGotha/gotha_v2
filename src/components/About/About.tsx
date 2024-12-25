
import { ProfileImage } from './ProfileImage';
import { Timeline } from './Timeline';

export const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <ProfileImage />
        <Timeline />
      </div>
    </section>
  );
};
