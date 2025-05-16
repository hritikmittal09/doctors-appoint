import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('doctor')
  getDoctor(): string {
    return 'Hello from Doctor';
  }

  @Get('patient')
  getPatient(): string {
    return 'Hello from Patient';
  }
}
