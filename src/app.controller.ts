import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/send-email')
  async sendEmail(@Body() body: { to: string, subject: string, text: string }): Promise<string> {
    const { to, subject, text } = body;

    return await this.appService.sendEmail(to, subject, text);
  }
}
