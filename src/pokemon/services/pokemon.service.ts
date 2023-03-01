import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PokemonAbilityDto } from '../dtos/pokemon.dto';

import { IPokemon } from '../models/pokemon.model';
import { IAbilities } from '../models/pokemon_ability.model';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  async getAllPokemon(): Promise<IPokemon[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .pipe(
          catchError((error: AxiosError) => {
            throw new BadRequestException(error.response.data);
          }),
        ),
    );
    return data.results;
  }

  async getPokemonAbility(pokemon: PokemonAbilityDto): Promise<IAbilities[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(pokemon.url).pipe(
        catchError((error: AxiosError) => {
          throw new BadRequestException({
            statusCode: 404,
            message: 'Not found Abilities',
            error: error.response.data,
          });
        }),
      ),
    );
    return data.abilities;
  }
}
