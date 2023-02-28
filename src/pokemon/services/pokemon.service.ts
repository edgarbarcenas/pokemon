import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

import { IPokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async getAllPokemon(): Promise<IPokemon[]> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data.results;
  }

  async getPokemonAbility(pokemon: IPokemon) {
    const { data } = await firstValueFrom(
      this.httpService.get(pokemon.url).pipe(
        catchError((error: AxiosError) => {
          console.log(error.response.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data.abilities;
  }
}
