'use client'

import { ShieldCheck, Microscope, HeartPulse } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

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
  const t = useTranslations('about')

  const features = [
    {
      icon: ShieldCheck,
      label: t('ethics'),
    },
    {
      icon: Microscope,
      label: t('science'),
    },
    {
      icon: HeartPulse,
      label: t('care'),
    },
  ]

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
            {t('welcome')}
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-foreground"
            variants={itemVariants}
          >
            {t('healthPriority')}
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
            {t('aboutUs')}
          </motion.span>
          <motion.h3
            className="text-3xl md:text-3xl font-bold text-foreground  tracking-tight uppercase leading-tight mb-6"
            variants={itemVariants}
          >
            {t('constantEvolution')}
          </motion.h3>
          <motion.p
            className="text-[#4B5563] text-lg text-center leading-7 tracking-normal mb-12"
            variants={itemVariants}
          >
            {t('description')}
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
