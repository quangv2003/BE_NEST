import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

//   @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
//   user: User;

//   @ManyToOne(() => Article, (article) => article.comments, { onDelete: 'CASCADE' })
//   article: Article;

  @Column({ type: 'text' })
  content: string;

//   @ManyToOne(() => Comment, (comment) => comment.replies, { nullable: true, onDelete: 'CASCADE' })
//   parent: Comment;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
