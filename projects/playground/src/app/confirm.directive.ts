import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message')
  confirmMessage = 'vide';

  // On veut qd on click sur le lien que sa lance une popup qui nous demande de confirmer qu'on souhaite changer de page

  //Methode 1 _______________________________
  /* @HostListener('click', ['$event'])
  onClickLink(event: Event) {
    const confirm = window.confirm('Ete vous sur !');  // Affiche la popup qui demande confirmation si on veut y aller => ça return un boolean true ou false
    if (!confirm) { // si il click sur non cad false on entre dans ce block
      event.preventDefault(); // empéche le lien de ce lancer
    }
  } */

  //Methode 2 _______________________________
  /* @HostListener('click')
  onClickLink() {
    const confirm = window.confirm('Ete vous sur !');
    if (!confirm) {
      return false; // par default une fct qui return false <=> event.preventDefault();
    }
    return true;
  }
} */

  //Methode 3 _______________________________
  /* @HostListener('click')
  onClickLink(): boolean | void {  // la fct return un boolean si elle passe dans le if ou si non elle return rien
    const confirm = window.confirm('Ete vous sur !');
    if (!confirm) {
      return false;
    }
  } */

  //Methode 4 _______________________________
  /* @HostListener('click')
  onClickLink() {
    const confirm = window.confirm('Ete vous sur !');
    return confirm; // ce truc return true ou ou false on peut le mettre directement en return de la fct
  } */

  //Methode 5 _______________________________
  /* @HostListener('click')
  onClickLink() {
    return window.confirm('Ete vous sur !'); // on ce passe de la variable on met directement ce qu'elle contiend en return
  } */

  @Input('confirm-message') // si il y a cette attribut dans la target de la directive alors prend la valeur donné pour le message à afficher
  message = 'Ete vous sur !'; // si non prend cette valeur par default

  //Methode 6 _______________________________
  @HostListener('click')
  onClickLink() {
    return window.confirm(this.message);
  }
}
