import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiAward, FiBook, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
  const { t } = useTranslation('common')

  const degrees = [
    {
      title: t('education.degrees.degree1.title'),
      institution: t('education.degrees.degree1.institution'),
      period: t('education.degrees.degree1.period'),
      description: t('education.degrees.degree1.grade'),
      type: t('education.title'),
    },
    {
      title: t('education.degrees.degree2.title'),
      institution: t('education.degrees.degree2.institution'),
      period: t('education.degrees.degree2.period'),
      description: t('education.degrees.degree2.grade'),
      type: t('education.title'),
    },
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {degrees.map((degree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <FiBook className="w-8 h-8 text-primary-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {degree.title}
                    </h3>
                    <div className="text-primary-600 font-semibold">
                      {degree.type}
                    </div>
                  </div>
                </div>
                <div className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
                  {degree.type}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiMapPin className="w-5 h-5 mr-3 text-primary-600" />
                  <span className="font-medium">{degree.institution}</span>
                </div>

                <div className="flex items-center text-gray-500 dark:text-gray-500">
                  <FiCalendar className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{degree.period}</span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <FiAward className="w-5 h-5 mr-3 text-primary-600" />
                  <span>{degree.description}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t('education.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('skills.technical.title')}
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {t('skills.technical.items.0')}</li>
                <li>• {t('skills.technical.items.3')}</li>
                <li>• {t('skills.technical.items.4')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {t('skills.soft.title')}
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• {t('skills.soft.items.1')}</li>
                <li>• {t('skills.soft.items.2')}</li>
                <li>• {t('skills.soft.items.3')}</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education