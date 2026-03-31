import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialise Resend avec ta clé API
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, telephone, email, sujet, date_souhaitee, message } = body;

    // ATTENTION : Remplace 'contact@ton-domaine.com' par l'email du domaine que tu as vérifié sur Resend
    const verifiedDomainEmail = 'contact@kinesvelt.com'; 

    // 1. Email envoyé à KINESVELT (Toi)
    await resend.emails.send({
      from: `Site Web Kinesvelt <${verifiedDomainEmail}>`,
      to: 'jalal.asfaj5@gmail.com',
      subject: `Nouveau Contact : ${sujet}`,
      html: `
        <div style="font-family: sans-serif; color: #2A2A2A;">
          <h2>Nouveau message depuis le site web</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Nom:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${nom}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Téléphone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${telephone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email || 'Non renseigné'}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Sujet:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${sujet}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Date (Si RDV):</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${date_souhaitee || 'Non renseignée'}</td></tr>
          </table>
          <h3>Message :</h3>
          <p style="background-color: #FAF8F7; padding: 15px; border-radius: 8px;">${message || 'Aucun message.'}</p>
        </div>
      `,
    });

    // 2. Auto-réponse envoyée au CLIENT (Seulement s'il a laissé un email)
    if (email) {
      await resend.emails.send({
        from: `Kinesvelt <${verifiedDomainEmail}>`,
        to: email,
        subject: 'Confirmation de votre demande - Kinesvelt',
        html: `
          <div style="font-family: sans-serif; color: #2A2A2A;">
            <p>Bonjour <strong>${nom}</strong>,</p>
            <p>Nous avons bien reçu votre message concernant : <em>${sujet}</em>.</p>
            <p>Notre équipe en prendra connaissance dans les plus brefs délais et vous contactera très prochainement au <strong>${telephone}</strong> pour faire suite à votre demande.</p>
            <br/>
            <p>Cordialement,</p>
            <p><strong>L'équipe Kinesvelt</strong><br/>
            05 22 21 73 91<br/>
            Résidence AL ANDALOUS, Casablanca</p>
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