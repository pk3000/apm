import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceWithSpaces' // This is the actual name you use in the template to use the pipe
})

export class ConvertToSpacesPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    transform(value: string, character: string): string {
        return value.replace(character, ' ');
    }

}
