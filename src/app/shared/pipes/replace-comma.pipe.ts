import { PipeTransform } from "@angular/core";
import {Pipe} from '@angular/core';

@Pipe({
    name: 'replaceComma'
})

export class ReplaceComma implements PipeTransform
{
    transform(value: string): string
    {
        if(!!value)//Si c la value n'est ni undefined et ni not null
        {
            return value.replace(/,/g, '.');
        }
        else
            return '';
    }
}