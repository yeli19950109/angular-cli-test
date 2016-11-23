/**
 * Created by Administrator on 2016/11/23.
 */
import { Directive, ElementRef, Renderer } from '@angular/core';
@Directive({ selector: '[highlight], input' })
/** Highlight the attached element or an InputElement in blue */
export class HighlightDirective {
    constructor(renderer: Renderer, el: ElementRef) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'powderblue');
        console.log(
            `* Contact highlight called for ${el.nativeElement.tagName}`);
    }
}
