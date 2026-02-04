'use client'

import { ShieldCheck, Microscope, HeartPulse } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: ShieldCheck,
    label: 'ÉTICA',
  },
  {
    icon: Microscope,
    label: 'CIÊNCIA',
  },
  {
    icon: HeartPulse,
    label: 'CUIDADO',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
}

export function AboutSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.span
            className="text-sm font-bold tracking-wide text-primary uppercase"
            variants={itemVariants}
          >
            Bem-vindos
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            variants={itemVariants}
          >
            A saúde como prioridade.
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-primary rounded-full mt-2"
            variants={itemVariants}
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.span
            className="text-sm font-bold tracking-wide text-primary uppercase mb-4"
            variants={itemVariants}
          >
            Sobre Nós
          </motion.span>
          <motion.h3
            className="text-3xl md:text-3xl font-bold text-foreground  tracking-tight uppercase leading-tight mb-6"
            variants={itemVariants}
          >
            Acreditamos na busca constante pela evolução.
          </motion.h3>
          <motion.p
            className="text-[#4B5563] text-lg text-center leading-7 tracking-normal mb-12"
            variants={itemVariants}
          >
            Seu desejo de crescer e desenvolver-se é o motor que nos impulsiona.
            Na Farmácia, estamos aqui para acompanhá-lo nesta jornada, para
            ajudá-lo a descobrir todo o seu potencial.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#F9FAFB] transition-colors rounded-3xl p-10 flex flex-col items-center justify-center gap-4 group cursor-default"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <feature.icon
                  className="h-8 w-8 text-primary stroke-[1.5px]"
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
