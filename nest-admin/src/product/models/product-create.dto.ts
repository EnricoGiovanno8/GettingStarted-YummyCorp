import { IsNotEmpty } from "class-validator";

export class ProducCreateDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    price: number;

}