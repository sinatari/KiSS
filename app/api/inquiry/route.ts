import { NextRequest, NextResponse } from 'next/server';
import { inquirySchema } from '@/lib/validation';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = inquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const data = parsed.data;
    const locale = body.locale || 'sv';

    const inquiry = await prisma.inquiry.create({
      data: { ...data, locale }
    });

    if (resend && process.env.NOTIFICATION_EMAIL) {
      await resend.emails.send({
        from: 'KiSS Website <noreply@kiss-weddings.se>',
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New inquiry from ${data.name}`,
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || '-'}
Wedding date: ${data.weddingDate || '-'}
Guest count: ${data.guestCount || '-'}
Venue: ${data.venue || '-'}
Budget: ${data.budget || '-'}
Locale: ${locale}

Message:
${data.message}
        `.trim()
      });
    }

    return NextResponse.json({ success: true, id: inquiry.id }, { status: 201 });
  } catch (err) {
    console.error('Inquiry submission failed', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
