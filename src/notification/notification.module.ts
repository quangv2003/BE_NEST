import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from 'src/entities/notification.entity';

@Module({
  controllers: [NotificationController],
    imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationService]
})
export class NotificationModule {}
