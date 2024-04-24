import { Module } from '@nestjs/common';
import { IndicatorsDayController } from './indicators-day.controller';
import { IndicatorsDayService } from './indicators-day.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IndicatorsDayController],
  providers: [IndicatorsDayService]
})
export class IndicatorsDayModule {}
