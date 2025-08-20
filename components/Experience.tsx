import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const { t } = useTranslation('common')

  const jobs = [
    {
      title: t('experience.jobs.job1.title'),
      company: t('experience.jobs.job1.company'),
      period: t('experience.jobs.job1.period'),
      description: t('experience.jobs.job1.description'),
    },
    {
      title: t('experience.jobs.job2.title'),
      company: t('experience.jobs.job2.company'),
      period: t('experience.jobs.job2.period'),
      description: t('experience.jobs.job2.description'),
    },
    {
      title: t('experience.jobs.job3.title'),
      company: t('experience.jobs.job3.company'),
      period: t('experience.jobs.job3.period'),
      description: t('experience.jobs.job3.description'),
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary-600">
                    <div className="flex items-center mb-4">
                      <FiBriefcase className="w-5 h-5 text-primary-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {job.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                      <FiMapPin className="w-4 h-4 mr-2" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-500 dark:text-gray-500 mb-4">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>{job.period}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t('skills.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t('skills.soft.title')}</div>
              <div className="text-gray-600 dark:text-gray-400">
                {t('skills.soft.items.2')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t('skills.technical.title')}</div>
              <div className="text-gray-600 dark:text-gray-400">
                {t('skills.technical.items.1')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">{t('skills.languages.title')}</div>
              <div className="text-gray-600 dark:text-gray-400">
                {t('skills.languages.items.1.name')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 