import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

export function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background with slight gradient overlay */}
      <div className="absolute inset-0 z-0">
        {image && (
          <img 
            src={image} 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
