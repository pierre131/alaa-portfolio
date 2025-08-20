import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { message: string } | { error: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  try {
    const { firstName, lastName, email, subject, message } = req.body || {}

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({ error: 'الرجاء ملء جميع الحقول' })
    }

    // Placeholder: Log to server. Later, integrate with email service (Nodemailer/Resend/Formspree)
    console.log('New contact message:', { firstName, lastName, email, subject, message })

    return res.status(200).json({ message: 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك!' })
  } catch (e) {
    return res.status(500).json({ error: 'حدث خطأ غير متوقع' })
  }
}


