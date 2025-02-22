import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { User } from './user/user.entity';
import { Article } from './entities/article.entity';
import { Tag } from './entities/tag.entity';
import { Like } from './entities/like.entity';
import { Notification } from './entities/notification.entity';
import { Category } from './entities/category.entity';
import { Comment } from './entities/comment.entity';
import { NotificationModule } from './notification/notification.module';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';
import { TagModule } from './tag/tag.module';
import { LikeModule } from './like/like.module';
import { CommentService } from './comment/comment.service';
import { CommentController } from './comment/comment.controller';
import { CommentModule } from './comment/comment.module';
import { ArticleModule } from './article/article.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'news',
      entities: [User, Article],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Article, Tag, Like, Notification, Category, Comment ]),
    CategoryModule,
    NotificationModule,
    TagModule,
    LikeModule,
    CommentModule,
    ArticleModule,
  ],
  controllers: [AppController, TagController, CommentController],
  providers: [AppService, TagService, CommentService],
})
export class AppModule {}
