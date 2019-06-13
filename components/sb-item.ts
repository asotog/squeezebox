import {Component, ContentChild, Input, Output, EventEmitter, Inject, forwardRef} from '@angular/core';
import {SBItemBody} from './sb-item-body';
import {SqueezeBox} from './squeezebox';

@Component({
    exportAs: 'sbItem',
    selector: 'sb-item',
    template: `
        <div class="sb-item" [ngClass]="{'is-collapsed': collapsed}">
            <ng-content></ng-content>
        </div>
    `
})
export class SBItem {

    private squeezebox:SqueezeBox;

    @Input() public collapsed: boolean = true;
    @Output() onToggled =  new EventEmitter();

    @ContentChild(SBItemBody, {static: false}) body: SBItemBody;

    constructor(@Inject(forwardRef(() => SqueezeBox)) squeezebox: SqueezeBox) {
        this.squeezebox = squeezebox;
    }

    ngAfterViewInit() {
        this.refreshBody();
    }
    
    /**
     * Refreshes body calculation
     */
    refreshBody() {
        this.body.toggle(this.collapsed);
    }

    toggle(collapsed: boolean) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
        this.onToggled.emit(collapsed);
    }
    
    applyToggle(collapsed: boolean) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    }

}
