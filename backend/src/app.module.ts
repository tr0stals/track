import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicatorsDayModule } from './indicators-day/indicators-day.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [IndicatorsDayModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
