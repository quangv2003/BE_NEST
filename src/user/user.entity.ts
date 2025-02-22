import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Role } from '../enums/role.enum';
import { Comment } from 'src/entities/comment.entity';
import { Article } from 'src/entities/article.entity';
import { Like } from 'src/entities/like.entity';
import { Notification } from 'src/entities/notification.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  full_name: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @OneToMany(() => Article, (article) => article.author)
  articles: Article[];

  @OneToMany((type) => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];

  @OneToMany(() => Notification, (notification) => notification.user)
  notifications: Notification[];
  
}
