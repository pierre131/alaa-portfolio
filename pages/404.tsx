import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8">الصفحة غير موجودة</p>
        <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
          العودة إلى الرئيسية
        </Link>
      </div>
    </main>
  )
}


