import { Injectable } from '@angular/core';

import { Dog }        from './dog';
import { Dogs }       from './available-dogs';

@Injectable()
export class DogService {
  getDogs(): Promise<Dog[]> {
      return Promise.resolve(Dogs);
  }
}