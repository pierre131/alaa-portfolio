import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiArrowDown, FiAward, FiBook, FiBriefcase, FiUser } from 'react-icons/fi'

const Hero = () => {
  const { t } = useTranslation('common')

  const stats = [
    { icon: FiUser, label: t('hero.stats.experience'), value: '3+' },
    { icon: FiBriefcase, label: t('hero.stats.jobs'), value: '3' },
    { icon: FiBook, label: t('hero.stats.degrees'), value: '2' },
    { icon: FiAward, label: t('hero.stats.certificates'), value: '6' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('hero.title')}
            </h1>

            <h2
              className="text-3xl md:text-5xl font-bold gradient-text mb-6"
            >
              {t('hero.subtitle')}
            </h2>

            <p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            >
              {t('hero.description')}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t('hero.cta')}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <stat.icon className="w-8 h-8 text-primary-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-600 dark:text-gray-400"
        >
          <FiArrowDown className="w-6 h-6 mb-2" />
          <span className="text-sm">{t('common.scroll', 'Scroll')}</span>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero