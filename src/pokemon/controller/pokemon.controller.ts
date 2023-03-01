import { Controller, Get, Body } from '@nestjs/common';

import { PokemonService } from '../services/pokemon.service';
import { PokemonAbilityDto } from '../dtos/pokemon.dto';
import { IPokemon } from '../models/pokemon.model';
import { IAbilities } from '../models/pokemon_ability.model';

@Controller('pokemon')
export class PokemonController {
    constructor(private PokemonService: PokemonService){}
    
    @Get()
    async getAllPokemon(): Promise<IPokemon[]> {
        return this.PokemonService.getAllPokemon();
    }

    @Get('ability')
    async getAbilityPokemon(@Body() payload: PokemonAbilityDto): Promise<IAbilities[]>{
        return this.PokemonService.getPokemonAbility(payload);
    } 
}
