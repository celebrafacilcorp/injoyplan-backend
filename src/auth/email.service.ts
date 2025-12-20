import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import VerificationEmail from './emails/VerificationEmail'; // Ensure path is correct

@Injectable()
export class EmailService {
    private resend: Resend;

    constructor(private configService: ConfigService) {
        this.resend = new Resend(this.configService.get('RESEND_API_KEY'));
    }

    async sendVerificationEmail(email: string, token: string) {
        try {
            const emailHtml = await render(VerificationEmail({ code: token }));

            await this.resend.emails.send({
                from: 'Injoyplan <onboarding@resend.dev>', // Or verified domain
                to: email,
                subject: `Código de verificación: ${token} - Injoyplan`,
                html: emailHtml,
            });
            console.log(`Verification email sent to ${email}`);
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }

    async sendPasswordResetEmail(email: string, token: string) {
        // For now keep simple or migrate later
        // Just simple HTML for reset password for now to avoid complexity, or reuse template structure
        const frontendUrl = this.configService.get('FRONTEND_URL');
        const resetLink = `${frontendUrl}/reset-password?token=${token}`;

        await this.resend.emails.send({
            from: 'Injoyplan <onboarding@resend.dev>',
            to: email,
            subject: 'Recuperación de contraseña - Injoyplan',
            html: `
        <h1>Recuperación de contraseña</h1>
        <p>Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
        <a href="${resetLink}">Restablecer contraseña</a>
      `,
        });
    }
}
