import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ContactItem 
              icon={<Mail />}
              title="Email"
              content="clashgustavo1@gmail.com"
              delay={0.2}
            />
            <ContactItem 
              icon={<Phone />}
              title="Phone"
              content="+55 11 988318450"
              delay={0.4}
            />
            <ContactItem 
              icon={<MapPin />}
              title="Location"
              content="Brazil - São Paulo"
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: string; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col items-center gap-2"
  >
    <div className="p-4 bg-gray-50 rounded-full">
      {icon}
    </div>
    <h3 className="font-medium">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);
