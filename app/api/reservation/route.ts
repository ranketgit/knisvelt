import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom_complet, telephone, email, date_souhaitee, soins_selectionnes } = body;

    // ATTENTION : Remplace par ton email de domaine vérifié sur Resend
    const verifiedDomainEmail = 'contact@kinesvelt.com'; 
    const adminEmail = 'jalal.asfaj5@gmail.com';

    // 1. EMAIL POUR KINESVELT (L'ADMIN)
    await resend.emails.send({
      from: `Réservations Kinesvelt <${verifiedDomainEmail}>`,
      to: adminEmail,
      subject: `Nouvelle Réservation - ${nom_complet}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #FAF8F7; padding: 40px 20px; border-radius: 12px;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
            <h1 style="color: #2A2A2A; margin-top: 0; font-size: 24px; border-bottom: 2px solid #E38F75; padding-bottom: 15px;">Nouvelle Demande de Réservation</h1>
            
            <h3 style="color: #E38F75; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 30px;">Coordonnées du client</h3>
            <table style="width: 100%; border-collapse: collapse; color: #555; font-size: 15px;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Nom complet:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${nom_complet}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Téléphone:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="tel:${telephone}" style="color: #E38F75;">${telephone}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email || 'Non renseigné'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Date souhaitée:</strong></td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #2A2A2A;">${date_souhaitee}</td></tr>
            </table>

            <h3 style="color: #E38F75; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 30px;">Soins & Équipements demandés</h3>
            <div style="background-color: #FAF8F7; padding: 20px; border-radius: 12px; color: #2A2A2A; font-weight: 500; line-height: 1.6;">
              ${soins_selectionnes.split(', ').map((soin: string) => `• ${soin}<br/>`).join('')}
            </div>
          </div>
        </div>
      `,
    });

    // 2. EMAIL DE CONFIRMATION POUR LE CLIENT (Si l'email est fourni)
    if (email) {
      await resend.emails.send({
        from: `Kinesvelt Casablanca <${verifiedDomainEmail}>`,
        to: email,
        subject: 'Votre demande de réservation chez Kinesvelt',
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #2A2A2A; font-weight: 400; font-size: 28px;">KINESVELT</h1>
              <div style="width: 40px; height: 2px; background-color: #E38F75; margin: 0 auto;"></div>
            </div>

            <p style="color: #555; font-size: 16px; line-height: 1.6;">Bonjour <strong>${nom_complet}</strong>,</p>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">Nous avons bien reçu votre demande de réservation pour la date du <strong>${date_souhaitee}</strong>.</p>
            
            <div style="background-color: #FAF8F7; padding: 25px; border-radius: 16px; margin: 30px 0; border-left: 4px solid #E38F75;">
              <h3 style="margin-top: 0; color: #2A2A2A; font-size: 16px;">Vos soins sélectionnés :</h3>
              <p style="color: #555; font-size: 15px; margin-bottom: 0; line-height: 1.6;">
                ${soins_selectionnes.split(', ').map((soin: string) => `• ${soin}<br/>`).join('')}
              </p>
            </div>

            <p style="color: #555; font-size: 16px; line-height: 1.6;">Notre équipe va vous contacter très prochainement au <strong>${telephone}</strong> afin de valider l'heure exacte de votre rendez-vous.</p>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 14px; line-height: 1.5;">
              <p>À très bientôt,<br/><strong>L'équipe Kinesvelt</strong></p>
              <p>📍 Résidence AL ANDALOUS, Casablanca<br/>📞 05 22 21 73 91</p>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur Reservation Resend:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 });
  }
}