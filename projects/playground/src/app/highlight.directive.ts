import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
@Directive({
  selector: 'p[highlight] ',
})
export class HighlightDirective {
  // on veut que le p qui porte la directive highlight (change de color) quand on entre avec la souri et redevient normal qd la sourit ressort
  @HostBinding('style.backgroundColor') // HostBinding permet de ce lier à une propriété HTML
  color = 'transparent';

  ngOnInit() {
    this.color = this.highlightSortir; // Des le démarage l'élément qui contiend highlight_Entrer prend la valeur mis en HTML pour son backgroudColor il n'attend pas d'event pour ça
  }

  @Input('highlight_Entrer') // Veut mettre attribut différent Ex autre couleur => va prendre la valeur de la color défini sur cette attribut highlight_Entrer à la place de highlight
  highlightEntrer = 'yellow'; // Ex si pas l'attribut highlight_Entrer mais que highlight met yellow

  @Input('highlight_Sortir')
  highlightSortir = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.highlightEntrer;
  }

  @HostListener('mouseout') // HostListener permet d'écouter un événement
  onMouseOut(element: HTMLElement) {
    this.color = this.highlightSortir; // color (backgoundColor) vient de HostBinding qui est lié à une propriété HTMl => on peut la modifier dynamiquement si cet événement à lieu
  }

  /* constructor(private elementRef: ElementRef<HTMLElement>) {
  elementRef.nativeElement.addEventListener('mouseenter', ($event) => {
       console.log(this.elementRef);
       console.log('On est entre !');
       this.onMouseEnter($event.clientX);
    }); 
 } */

  /* onMouseEnter(coordonneX: Number) {
    console.log(this.elementRef);
    console.log('On est entre !', coordonneX);
  } */

  /* @HostListener('mouseenter', ['$event.clientX', '$event.clientY', '$event'])
  onMouseEnter(coordonneX: number, coordonneY: number, evenement: MouseEvent) {
    console.log(this.elementRef);
    console.log('On est entre !', coordonneX, coordonneY, evenement);
  } */

  /* @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  } */

  /* @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(element: HTMLElement) {
    element.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut(element: HTMLElement) {
    element.style.backgroundColor = 'transparent';
  } */

  /*  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = 'yellow';
  }

  @HostListener('mouseout')
  onMouseOut(element: HTMLElement) {
    this.color = 'transparent';
  }
 */

  /*constructor(private elementRef: ElementRef<HTMLElement>) {
  this.highlightEntrer =
  elementRef.nativeElement.getAttribute('highlight_Entrer') || 'yellow'; 
}*/
}
