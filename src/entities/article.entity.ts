import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';

import { Category } from './category.entity';
import { Tag } from './tag.entity';
import { Comment } from './comment.entity';
import { User } from 'src/user/user.entity';
import { Like } from './like.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  content: string;

  @Column({ default: false })
  isPublished: boolean;

  @Column('simple-array')
  user_ids: number[]; 

  @ManyToOne(() => User, (user) => user.articles)
  author: User;

  @ManyToOne(() => Category, (category) => category.articles)
  category: Category;

  @ManyToMany(() => Tag, (tag) => tag.articles)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => Comment, (comment) => comment.article)
  comments: Comment[];

  @OneToMany(() => Like, (like) => like.article)
  likes: Like[];
  
  @Column({ type: 'timestamp', nullable: true })
  scheduledAt: Date;

  @Column({ nullable: true })
  imageUrl: string;
}
