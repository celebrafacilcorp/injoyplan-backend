import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';

@Injectable()
export class ComplaintsService {
  constructor(private prisma: PrismaService) { }

  async create(createComplaintDto: CreateComplaintDto) {
    const {
      consumerName, consumerDocType, consumerDocNumber, consumerAddress, consumerDepartment, consumerProvince, consumerDistrict, consumerPhone, consumerEmail,
      isMinor, repName, repDocType, repDocNumber, repAddress, repDepartment, repProvince, repDistrict, repPhone, repEmail,
      goodType, claimAmount, goodDescription,
      claimType, claimDetail, orderRequest
    } = createComplaintDto;

    const complaint = await this.prisma.complaint.create({
      data: {
        consumerName, consumerDocType, consumerDocNumber, consumerAddress, consumerDepartment, consumerProvince, consumerDistrict, consumerPhone, consumerEmail,
        isMinor: isMinor ?? false,
        repName, repDocType, repDocNumber, repAddress, repDepartment, repProvince, repDistrict, repPhone, repEmail,
        goodType, claimAmount, goodDescription,
        claimType, claimDetail, orderRequest
      },
    });
    return { message: 'Reclamación registrada', id: complaint.id };
  }
}
