import { Controller } from '@nestjs/common';
import { IndicatorsDayService } from './indicators-day.service';


@Controller('indicatorsDay')
export class IndicatorsDayController {
    constructor(private readonly indicatorDayService: IndicatorsDayService) {}
}
