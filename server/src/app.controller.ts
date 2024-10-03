import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dynamicRoute/:id')
  getDynamicRoute(@Param('id') id: string): string {
    return `현재 파라미터는 ${id}입니다`;
  }
}
