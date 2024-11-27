import { Injectable } from '@nestjs/common';
import { CreateChatInput } from './dto/create-chat.input';
import { UpdateChatInput } from './dto/update-chat.input';
import { ChatRepository } from './chat.repository';

@Injectable()
export class ChatsService {

  constructor(private readonly chatRepository: ChatRepository) {

  }
  async create(createChatInput: CreateChatInput, userId: string) {
    return this.chatRepository.create({
      ...createChatInput,
      userId,
      userIds: createChatInput.userIds   || []
    })
  }

  async findAll() {
    return this.chatRepository.find({});
  }

  async findOne(_id: string) {
    return this.chatRepository.findOne({
      _id
    })
  }

  async update(id: number, updateChatInput: UpdateChatInput) {
    return `This action updates a #${id} chat`;
  }

  async remove(id: number) {
    return `This action removes a #${id} chat`; 
  }
}
