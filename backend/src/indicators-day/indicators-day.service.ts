import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IndicatorsDayService {
    constructor(private readonly prismaService: PrismaService) {}
}
