import { IsEnum, IsNotEmpty, IsOptional, IsString, IsBoolean, IsDate, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { NotificationStatus } from 'src/entities/notification.entity';


export class CreateNotificationDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsOptional()
  @IsBoolean()
  isRead?: boolean;

  @IsOptional()
  @IsEnum(NotificationStatus)
  status?: NotificationStatus;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  scheduleAt?: Date;

  @IsNotEmpty()
  userId: number;
}
