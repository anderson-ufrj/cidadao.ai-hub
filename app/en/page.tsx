'use client'

import { getTranslations } from '@/lib/i18n'
import { InstallPWA } from '@/components/install-pwa'
import { LanguageSwitcher } from '@/components/language-switcher'

export default function ENPage() {
  const t = getTranslations('en')
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-24 bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-center text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          <p className="text-center text-base text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-green-600 dark:text-green-400">
                {t.hero.stats.agents}
              </h2>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {t.hero.stats.apis}
              </h2>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {t.hero.stats.monitoring}
              </h2>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-orange-600 dark:text-orange-400">
                {t.hero.stats.alerts}
              </h2>
            </div>
          </div>
        </div>
      </main>
      <InstallPWA />
      <LanguageSwitcher />
    </>
  )
}