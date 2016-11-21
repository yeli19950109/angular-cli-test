/**
 * Created by admin on 2016/11/18.
 */

import { Injectable } from '@angular/core';
import { Crisis } from './crisis';

import { CRISIS } from './mock-crisis';


@Injectable()
export class CrisisService {

    constructor() { }

    getCrisis():Crisis[]{
        return CRISIS;
    }

}