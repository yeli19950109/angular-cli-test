/**
 * Created by Administrator on 2016/11/24.
 */
/**
 * Created by Administrator on 2016/11/22.
 */
import { Directive, ElementRef, Renderer,Input ,HostListener} from '@angular/core';

@Directive({ selector: '[test]' })
/** Highlight the attached element in gold */
export class TestDirective {
    private _defaultColor = 'red';
    constructor(private renderer: Renderer,private el: ElementRef) {
        console.log(el.nativeElement);
        console.log(renderer);
    }

    @Input('test') highlightColor: string;
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }


    ngOnChanges(){
        console.log('asdasd')
    }
}
