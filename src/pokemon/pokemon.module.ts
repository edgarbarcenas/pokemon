import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PokemonController } from './controller/pokemon.controller';
import { PokemonService } from './services/pokemon.service';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [HttpModule]
})
export class PokemonModule {}
