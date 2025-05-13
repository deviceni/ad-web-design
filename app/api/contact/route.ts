import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, lang } = await request.json();

  try {
    await resend.emails.send({
      from: "AD WEB Design <noreply@adwebdsgn.io>",
      to: "adam@adwebdsgn.io",
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    let html;

    if (lang === "hu") {
      html = `
  <div style="background: #eeeeee; padding: 30px; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
    <div style="text-align: center;">
      <img src="https://adwebdsgn.io/ad-web-mini-logo.png" alt="AD WEB Design Logo" style="height: 80px; margin-bottom: 20px; border-radius: 6px;" />
    </div>
    <h2 style="font-size: 20px; margin-bottom: 10px;">Szia ${name},</h2>
    <p style="line-height: 1.6; font-size: 15px;">
      Köszönöm, hogy felkerested a <strong><span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design</strong> oldalát!<br />
      Az üzenetedet megkaptam, és hamarosan – általában 24 órán belül – válaszolni fogok.
    </p>
    <p style="line-height: 1.6; font-size: 15px;">
      Üdvözlettel,<br/>
      Devecseri Ádám<br/>
      <span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design
    </p>
    <hr style="margin-top: 30px;" />
    <p style="font-size: 12px; color: #888;">
      Ez egy automatikus üzenet a AD WEB Design-tól. Kérlek ne válaszolj rá közvetlenül.
    </p>
  </div>
  `;
    } else if (lang === "no") {
      html = `
  <div style="background: #eeeeee; padding: 30px; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
    <div style="text-align: center;">
      <img src="https://adwebdsgn.io/ad-web-mini-logo.png" alt="AD WEB Design Logo" style="height: 80px; margin-bottom: 20px; border-radius: 6px;" />
    </div>
    <h2 style="font-size: 20px; margin-bottom: 10px;">Hei ${name},</h2>
    <p style="line-height: 1.6; font-size: 15px;">
      Takk for at du kontaktet <strong><span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design</strong>!<br />
      Meldingen din er mottatt, og jeg vil komme tilbake til deg så snart som mulig – vanligvis innen 24 timer.
    </p>
    <p style="line-height: 1.6; font-size: 15px;">
      Med vennlig hilsen,<br/>
      Adam Devecseri<br/>
      <span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design
    </p>
    <hr style="margin-top: 30px;" />
    <p style="font-size: 12px; color: #888;">
      Dette er en automatisk e-post fra AD WEB Design. Vennligst ikke svar direkte.
    </p>
  </div>
  `;
    } else {
      html = `
  <div style="background: #eeeeee; padding: 30px; max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; color: #333;">
    <div style="text-align: center;">
      <img src="https://adwebdsgn.io/ad-web-mini-logo.png" alt="AD WEB Design Logo" style="height: 80px; margin-bottom: 20px; border-radius: 6px;" />
    </div>
    <h2 style="font-size: 20px; margin-bottom: 10px;">Hi ${name},</h2>
    <p style="line-height: 1.6; font-size: 15px;">
      Thank you for reaching out to <strong><span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design</strong>!<br />
      Your message has been received, and I’ll get back to you as soon as possible — usually within 24 hours.
    </p>
    <p style="line-height: 1.6; font-size: 15px;">
      Best regards,<br/>
      Adam Devecseri<br/>
      <span style="color: #ec4899;">A</span><span style="color: #00ffd7;">D</span> WEB Design
    </p>
    <hr style="margin-top: 30px;" />
    <p style="font-size: 12px; color: #888;">
      This is an automated email from AD WEB Design. Please do not reply directly.
    </p>
  </div>
  `;
    }

    await resend.emails.send({
      from: "AD WEB Design <noreply@adwebdsgn.io>",
      to: email,
      subject:
        lang === "hu"
          ? "Köszönjük, hogy kapcsolatba léptél az AD WEB Design-nal"
          : lang === "no"
            ? "Takk for at du kontaktet AD WEB Design"
            : "Thank you for contacting AD WEB Design",
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error });
  }
}
