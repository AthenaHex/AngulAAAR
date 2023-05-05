import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'upperCaseTheFirstLetter'
})

export class UpperCaseTheFirstLetter implements PipeTransform{
    transform(value:string) {
        let newWord ="";
        const wordArray = Array.from(value);
        wordArray.forEach(function(letter, index){
            if(index==0){
                newWord = newWord + letter.toUpperCase();
            }else{
                newWord = newWord + letter;
            }

            }
        );

        return ""+newWord;
    }
    
}


