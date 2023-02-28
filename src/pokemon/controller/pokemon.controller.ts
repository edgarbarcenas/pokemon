import { Controller, Get, Body } from '@nestjs/common';

import { PokemonService } from '../services/pokemon.service';
import { IPokemon } from '../models/pokemon.model';

@Controller('pokemon')
export class PokemonController {
    constructor(private PokemonService: PokemonService){}
    
    @Get()
    async getAllPokemon(){
        return this.PokemonService.getAllPokemon();
    }

    @Get('ability')
    async getAbilityPokemon(@Body() payload: IPokemon){
        return this.PokemonService.getPokemonAbility(payload);
    } 
}
