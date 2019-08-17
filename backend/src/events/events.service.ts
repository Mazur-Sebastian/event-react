import { Injectable, HttpService, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Injectable()
export class EventsService {
    constructor(private readonly httpService: HttpService) {}
    getCityName(cityName: string): Observable<AxiosResponse<any[]>> {
        return this.httpService
            .get(
                `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=
            ${cityName}&types=(cities)&key=AIzaSyAVU6lKdKSLCuXaQacbsPZsAndc0jrBYyA`,
            )
            .pipe(
                map(({ data }) => data),
                catchError(err => throwError(new HttpException('Message', HttpStatus.BAD_GATEWAY))),
            );
    }
}
