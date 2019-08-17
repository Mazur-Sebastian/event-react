import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    @IsString()
    @MinLength(6, {
        message: 'Name must have min 6 sings',
    })
    readonly username: string;

    @ApiModelProperty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsString()
    readonly password: string;
}
