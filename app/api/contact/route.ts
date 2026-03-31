import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise Resend avec ta clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, telephone, email, sujet, date_souhaitee, message } = body;

    const verifiedDomainEmail = 'contact@kinesvelt.com'; 

    // 1. Email envoyé à KINESVELT (Toi)
    await resend.emails.send({
      from: `Site Web Kinesvelt <${verifiedDomainEmail}>`,
      to: 'kinesvelt@outlook.com', // Replace with your actual receiving email
      subject: `Nouveau Contact : ${sujet}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF8F7; padding: 40px 20px; border-radius: 12px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <h1 style="color: #2A2A2A; margin-top: 0; font-size: 24px; border-bottom: 2px solid #E38F75; padding-bottom: 15px;">Nouveau Message - Page Contact</h1>
            
            <h3 style="color: #E38F75; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 30px;">Détails du client</h3>
            <table style="width: 100%; border-collapse: collapse; color: #555; font-size: 15px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Nom complet:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${nom}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Téléphone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="tel:${telephone}" style="color: #E38F75;">${telephone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email || 'Non renseigné'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Sujet:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #2A2A2A;">${sujet}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Date (Si RDV):</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${date_souhaitee || 'Non applicable'}</td></tr>
            </table>

            <h3 style="color: #E38F75; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 30px;">Message</h3>
            <div style="background-color: #FAF8F7; padding: 20px; border-radius: 12px; color: #2A2A2A; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
              ${message || 'Aucun message.'}
            </div>
          </div>
        </div>
      `,
    });

    // 2. Auto-réponse envoyée au CLIENT (Seulement s'il a laissé un email)
    if (email) {
      await resend.emails.send({
        from: `Kinesvelt Casablanca <${verifiedDomainEmail}>`,
        to: email,
        subject: 'Confirmation de votre demande - Kinesvelt',
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2A2A2A; font-weight: 400; font-size: 28px; letter-spacing: 2px;">KINESVELT</h1>
              <div style="width: 40px; height: 2px; background-color: #E38F75; margin: 0 auto;"></div>
            </div>

            <p style="color: #555; font-size: 16px; line-height: 1.6;">Bonjour <strong>${nom}</strong>,</p>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">Nous avons bien reçu votre demande concernant : <strong style="color: #2A2A2A;">${sujet}</strong>.</p>
            
            <div style="background-color: #FAF8F7; padding: 25px; border-radius: 16px; margin: 30px 0; border-left: 4px solid #E38F75;">
              <p style="color: #555; font-size: 15px; margin: 0; line-height: 1.6;">
                Notre équipe va prendre connaissance de votre message dans les plus brefs délais. Nous vous recontacterons très prochainement au <strong>${telephone}</strong> pour faire suite à votre demande.
              </p>
            </div>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px; line-height: 1.5;">
              <p>À très bientôt,<br/><strong style="color: #2A2A2A;">L'équipe Kinesvelt</strong></p>
              <p>📍 Résidence AL ANDALOUS, Casablanca<br/>📞 05 22 21 73 91</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur Resend:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}