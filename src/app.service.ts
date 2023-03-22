import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AppService {
  constructor(private mailerService: MailerService) { }

  async sendEmail(to: string, subject: string, text: string): Promise<string> {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text
      });
      return 'Email enviado com sucesso!';
    } catch (err) {
      return `Email não enviado - ${err}`;
    }
  }
}
