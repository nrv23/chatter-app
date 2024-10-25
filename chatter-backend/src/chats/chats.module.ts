import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsResolver } from './chats.resolver';
import { ChatRepository } from './chat.repository';
import { DatabaseModule } from 'src/common/database/database.module';
import { Chat, ChatSchema } from './entities/chat.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([
      {name: Chat.name, schema: ChatSchema}
    ])
  ],
  providers: [ChatsResolver, ChatsService, ChatRepository],
  exports: [ChatsService]
})
export class ChatsModule {}
