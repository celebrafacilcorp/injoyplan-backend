import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(private prisma: PrismaService) {}

  async create(createComplaintDto: CreateComplaintDto) {
    const complaint = await this.prisma.complaint.create({
      data: createComplaintDto,
    });
    return { message: 'Reclamación registrada', id: complaint.id };
  }
}
