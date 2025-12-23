import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateIf } from 'class-validator';

export class CreateComplaintDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerDocType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerDocNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerAddress: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerDepartment: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerProvince: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerDistrict: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  consumerPhone: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  consumerEmail: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isMinor?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repName?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repDocType?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repDocNumber?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repAddress?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repDepartment?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repProvince?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repDistrict?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repPhone?: string;

  @ApiProperty({ required: false })
  @ValidateIf((o) => o.repEmail && o.repEmail.length > 0)
  @IsEmail()
  @IsOptional()
  repEmail?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  goodType: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  claimAmount: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  goodDescription: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  claimType: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  claimDetail: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  orderRequest: string;
}
