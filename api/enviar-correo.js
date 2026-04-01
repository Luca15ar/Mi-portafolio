/* eslint-env node */
import { Resend } from 'resend';

// Vercel inyectará automáticamente la variable de entorno aquí
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) 
{
    if (req.method !== 'POST') 
    {
        return res.status(405).json({ message: 'Método no permitido' });
    }

  const { user_name, user_email, message } = req.body;

  try 
  {
    const data = await resend.emails.send({
      from: 'Portafolio <onboarding@resend.dev>',
      to: ['arecoluca03@gmail.com'],
      subject: `Nuevo mensaje de portafolio de: ${user_name}`,
      html: `
        <h3>Nuevo mensaje desde tu portafolio</h3>
        <p><strong>Nombre:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true, data });
  } 
  catch (error) 
  {
    res.status(500).json({ success: false, error: error.message });
  }
}