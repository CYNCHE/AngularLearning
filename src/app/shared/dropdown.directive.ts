import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective {
        
    @HostBinding('') isOpen = false;

    @HostListener('click') toggleOpen() {
        console.log("wut");
        this.isOpen = !this.isOpen;
    }
}