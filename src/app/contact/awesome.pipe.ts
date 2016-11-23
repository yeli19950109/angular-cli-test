/**
 * Created by Administrator on 2016/11/23.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'awesome' })
/** Precede the input string with the word "Awesome " */
export class AwesomePipe implements PipeTransform {
    transform(phrase: string) {
        return phrase ? 'Awesome ' + phrase : '';
    }
}
