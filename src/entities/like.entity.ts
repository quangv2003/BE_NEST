import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Article } from './article.entity';

@Entity('likes')
export class Like {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Article, (article) => article.likes, { onDelete: 'CASCADE' })
  article: Article;
}
