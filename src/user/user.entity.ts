import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Role } from '../enums/role.enum';

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

  @Column({ type: 'enum', enum: Role, default: Role.User }) // Default role is 'User'
  role: Role;

  // @OneToMany(() => Article, (article) => article.author)
  // articles: Article[];

  // @OneToMany(() => Comment, (comment) => comment.user)
  // comments: Comment[];

  // @OneToMany(() => Like, (like) => like.user)
  // likes: Like[];

  // @OneToMany(() => Notification, (notification) => notification.user)
  // notifications: Notification[];
}
