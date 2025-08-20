import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold mb-4">{t('common.name')}</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-8 mb-8"
          >
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.home')}
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.about')}
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.experience')}
            </a>
            <a href="#education" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.education')}
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.skills')}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
              {t('nav.contact')}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 pt-8"
          >
            <p className="text-gray-400 flex items-center justify-center">
              صنع بـ <FiHeart className="w-4 h-4 mx-2 text-red-500" /> {t('common.name')}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              © 2024
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 