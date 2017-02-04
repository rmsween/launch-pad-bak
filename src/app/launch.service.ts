import { Injectable } from '@angular/core';
import { Launch } from './launch';
import { LAUNCHES } from './mock-launches';
@Injectable()
export class LaunchService {
    getLaunches(): Promise<Launch[]> {
        return Promise.resolve(LAUNCHES);
    }
}
