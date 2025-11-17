import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  icon?: ReactNode;
  heightClass?: string;
  overlayClassName?: string;
}

const PageHero = ({
  title,
  subtitle,
  imageUrl,
  icon,
  heightClass = "h-[60vh]",
  overlayClassName = "bg-black/60",
}: PageHeroProps) => {
  return (
    <section className={`relative ${heightClass} flex items-center justify-center text-center text-white`}>
      <img
        src={imageUrl}
        alt={`${title} hero`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        {icon && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex justify-center"
          >
            {icon}
          </motion.div>
        )}
        <motion.h1
          className="elegant-text text-5xl md:text-6xl lg:text-7xl mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {title}
        </motion.h1>
        <motion.div
          className="h-1 w-24 bg-gradient-to-r from-luxury via-yellow-400 to-luxury rounded-full mx-auto mb-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        />
        <motion.p
          className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;

