import { AxiosResponse } from 'axios';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { Controller, Get, UseGuards, Param } from '@nestjs/common';

import { EventsService } from './events.service';
import { Observable } from 'rxjs';

@ApiUseTags('events')
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) {}

    @ApiBearerAuth()
    @Get('getCityName/:cityName')
    @UseGuards(AuthGuard('jwt'))
    async getAllUsers(@Param('cityName') cityName: string): Promise<any> {
        return this.eventsService.getCityName(cityName);
    }
}
