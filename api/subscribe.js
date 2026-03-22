// Vercel Serverless Function - Newsletter Subscribe
// Handles CORS + Resend Contact + Welcome Email

const RESEND_API_KEY = process.env.RESEND_API_KEY || 're_QNyWMxZH_9XJAKj52q5KZKSfnsvgpfdQU';

const welcomeEN = (email) => ({
  from: 'Luke <luke@uhl-systems.com>',
  to: email,
  subject: 'Revenue insights incoming.',
  html: `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; background: #0a0a0a; color: #ffffff;">
      <p style="font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: #888; margin-bottom: 32px;">UHL SYSTEMS</p>
      <h1 style="font-size: 28px; font-weight: 800; color: #ffffff; margin-bottom: 16px; line-height: 1.2;">You're in.</h1>
      <p style="font-size: 16px; color: #cccccc; line-height: 1.7; margin-bottom: 24px;">
        Expect practical insights on revenue systems, conversion architecture, and the kind of thinking that actually moves numbers.
      </p>
      <p style="font-size: 16px; color: #cccccc; line-height: 1.7; margin-bottom: 32px;">
        No fluff. No vanity metrics. Just what works.
      </p>
      <p style="font-size: 14px; color: #888;">
        In the meantime - if you want to see where your revenue leaks are, the calculator on the homepage is a good start.
      </p>
      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #222;">
        <p style="font-size: 13px; color: #555; margin: 0;">Luke<br>UHL Systems<br><a href="https://uhl-systems.com" style="color: #e8ff00; text-decoration: none;">uhl-systems.com</a></p>
      </div>
    </div>
  `
});

const welcomeDE = (email) => ({
  from: 'Luke <luke@uhl-systems.com>',
  to: email,
  subject: 'Revenue Insights kommen.',
  html: `
    <div style="font-family: -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 20px; background: #0a0a0a; color: #ffffff;">
      <p style="font-size: 13px; letter-spacing: 3px; text-transform: uppercase; color: #888; margin-bottom: 32px;">UHL SYSTEMS</p>
      <h1 style="font-size: 28px; font-weight: 800; color: #ffffff; margin-bottom: 16px; line-height: 1.2;">Du bist dabei.</h1>
      <p style="font-size: 16px; color: #cccccc; line-height: 1.7; margin-bottom: 24px;">
        Erwarte praxisnahe Insights zu Revenue-Systemen, Conversion-Architektur und dem Denken das tatsachlich Zahlen bewegt.
      </p>
      <p style="font-size: 16px; color: #cccccc; line-height: 1.7; margin-bottom: 32px;">
        Kein Fluff. Keine Eitelkeitsmetriken. Nur was funktioniert.
      </p>
      <p style="font-size: 14px; color: #888;">
        In der Zwischenzeit - wenn du sehen willst wo deine Revenue Leaks sind, ist der Calculator auf der Homepage ein guter Start.
      </p>
      <div style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #222;">
        <p style="font-size: 13px; color: #555; margin: 0;">Luke<br>UHL Systems<br><a href="https://uhl-systems.com/de/" style="color: #e8ff00; text-decoration: none;">uhl-systems.com</a></p>
      </div>
    </div>
  `
});

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://www.uhl-systems.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, lang } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Invalid email' });
  }

  try {
    // 1. Contact zu Resend hinzufuegen
    await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, unsubscribed: false })
    });

    // 2. Welcome Email senden
    const emailData = lang === 'de' ? welcomeDE(email) : welcomeEN(email);
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
