import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFavoriteDto {
  @ApiProperty({ description: 'ID del evento' })
  @IsString()
  @IsNotEmpty()
  eventId: string;
}
