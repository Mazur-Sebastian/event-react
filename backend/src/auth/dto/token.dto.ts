import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TokenDto {
    @ApiModelProperty()
    @IsString()
    readonly token: string;
}
