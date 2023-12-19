import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilterModule } from './filter/filter.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [FilterModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
