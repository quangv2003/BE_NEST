import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

//   @ManyToOne(() => User, (user) => user.notifications, { onDelete: 'CASCADE' })
//   user: User;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'enum', enum: ['unread', 'read'], default: 'unread' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
