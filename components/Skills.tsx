import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { FiAward, FiCheck, FiStar } from 'react-icons/fi'

const Skills = () => {
  const { t } = useTranslation('common')

  const skillCategories = [
    {
      title: t('skills.soft.title'),
      skills: [
        t('skills.soft.items.0'),
        t('skills.soft.items.4'),
        t('skills.soft.items.3'),
        t('skills.soft.items.1'),
        t('skills.soft.items.5'),
        t('skills.soft.items.2'),
      ],
      icon: FiStar,
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: t('skills.technical.title'),
      skills: [
        t('skills.technical.items.0'),
        'Excel',
        'Word',
        'Access',
        'PowerPoint',
      ],
      icon: FiCheck,
      color: 'from-green-500 to-blue-600',
    },
    {
      title: t('hero.stats.certificates'),
      skills: [
        'Business Plan & Feasibility Specialization - Edraak',
        'Al-Ameen Accounting Program - DARB Center',
        'ICDL - Emisa Center',
        'English Language Course',
        'Small Projects Study - 8 hours',
        'Psychological Support 12/3 to 16/3 2021',
      ],
      icon: FiAward,
      color: 'from-orange-500 to-red-600',
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('skills.title')}
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.technical.title')}</span>
                  <span className="text-primary-600 font-bold">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.soft.items.1')}</span>
                  <span className="text-primary-600 font-bold">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.soft.items.3')}</span>
                  <span className="text-primary-600 font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1, delay: 0.9 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.soft.items.5')}</span>
                  <span className="text-primary-600 font-bold">88%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '88%' }}
                    transition={{ duration: 1, delay: 1.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.soft.items.5')}</span>
                  <span className="text-primary-600 font-bold">92%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    transition={{ duration: 1, delay: 1.3 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{t('skills.soft.items.0')}</span>
                  <span className="text-primary-600 font-bold">87%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '87%' }}
                    transition={{ duration: 1, delay: 1.5 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary-500 to-blue-600 h-3 rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 