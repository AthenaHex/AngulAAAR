import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'deleteSpecialCharacters'
})

export class DeleteSpecialCharacters implements PipeTransform{
    transform(value:string) {
        // Pattern tel que ^:including, 1-9 de '1' à '9', ...
        // pas besoin d'espace (au contraire l'espace est compté)
        return value.replace(/[^a-zA-Z ]/g, "");
    }
    
}


