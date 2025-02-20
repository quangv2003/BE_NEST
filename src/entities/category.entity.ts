import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  // @OneToMany(() => Article, (article) => article.category)
  // articles: Article[];
}
