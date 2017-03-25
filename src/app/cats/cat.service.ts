import { Injectable } from '@angular/core';

import { Cat }        from './cat';
import { Cats }       from './available-cats';

@Injectable()
export class CatService {
  getCats(): Promise<Cat[]> {
      return Promise.resolve(Cats);
  }
}