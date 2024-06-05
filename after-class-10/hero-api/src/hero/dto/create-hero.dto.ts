import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHeroDto {
  @ApiProperty({
    example: 'Clark',
    description: 'Hero firstName',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Kenth',
    description: 'Hero lastName',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: 'SUPERMAN',
    description: 'Hero Alias',
    required: true,
    uniqueItems: true,
  })
  @IsString()
  @IsNotEmpty()
  alias: string;
}
