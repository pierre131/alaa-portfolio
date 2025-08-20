import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiCalendar, FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi'

const About = () => {
  const { t } = useTranslation('common')

  const personalInfo = [
    {
      icon: FiCalendar,
      label: t('about.personalInfo.birthDate'),
      value: t('about.personalInfo.birthDateValue'),
    },
    {
      icon: FiMapPin,
      label: t('about.personalInfo.birthPlace'),
      value: t('about.personalInfo.birthPlaceValue'),
    },
    {
      icon: FiPhone,
      label: t('about.personalInfo.phone'),
      value: t('about.personalInfo.phoneValue'),
    },
    {
      icon: FiMail,
      label: t('about.personalInfo.email'),
      value: t('about.personalInfo.emailValue'),
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('about.title')}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FiUser className="w-6 h-6 mr-3 text-primary-600" />
                {t('about.personalInfo.title')}
              </h3>
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <info.icon className="w-5 h-5 text-primary-600 mr-4" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.label}
                      </div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">3+</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('hero.stats.experience')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('about.title')}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">6</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('hero.stats.certificates')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('skills.title')}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
            <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {t('hero.stats.jobs')}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {t('experience.title')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 