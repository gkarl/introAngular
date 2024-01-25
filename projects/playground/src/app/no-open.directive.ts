import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  //Methode 1 _______________________________
  /* @HostListener('click', ['$event'])
  onClickLink(event: Event) {
    console.log('je click sur le lien');
    event.preventDefault();
  } */

  //Methode 2 _______________________________
  // On veut que le lien ne ce lance pas quand on click dessus
  @HostListener('click')
  onClickLink() {
    console.log('je click sur le lien');
    return false;
  }
}
