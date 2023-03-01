import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class PokemonAbilityDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsUrl()
    url: string;
}