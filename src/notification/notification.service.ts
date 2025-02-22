import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from 'src/entities/notification.entity';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async create(
    createNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    const notification = this.notificationRepository.create(
      createNotificationDto,
    );
    return this.notificationRepository.save(notification);
  }

  async findAll(page: number, limit: number) {
    const [notifications, total] =
      await this.notificationRepository.findAndCount({
        skip: (page - 1) * limit,
        take: limit,
      });

    return {
      data: notifications,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async findOne(id: number) {
    const notification = await this.notificationRepository.findOne({
      where: { id },
      relations: ['user'],
    });

    if (!notification)
      throw new NotFoundException(`Notification with ID ${id} not found`);

    return notification;
  }

  async update(
    id: number,
    updateNotificationDto: CreateNotificationDto,
  ): Promise<Notification> {
    await this.notificationRepository.update(id, updateNotificationDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.notificationRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Notification with ID ${id} not found`);
  }

  @Cron('* * * * * *')
  handleCron() {
    console.log(1);
  }
}
