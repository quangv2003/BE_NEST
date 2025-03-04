import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Article } from './article.entity';


@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 255 })
  name: string;

  @Column({ unique: true })
  slug: string;

  @ManyToMany(() => Article, (article) => article.tags)
  articles: Article[];
}
