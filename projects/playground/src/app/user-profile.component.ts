import { Component, Directive, ElementRef, Input } from '@angular/core';

/* @Directive({
  selector: 'div[user-profile]',
}) */

// Les Compossants on specialement été conçu pour injecter du HTML grace à template
@Component({
  selector: 'div[user-profile]',
  template: `<h4>
      <!--{{ firstName }} => Interpolation projeter des valeur dans le template html -->
      {{ firstName }} {{ lastName | uppercase }}
      <!-- [src]="avatar" => Property Binding, lier une valeur à une propriété d'un élément html  -->
      <span><img [src]="avatar" alt="" style="height: 60px;" /></span>
    </h4>
    <p>
      <!-- [class.employ]="true" => Class Binding, class activé si égale qqc de true javaScript  -->
      <strong [class.employ]="isEmployee">
        Metier :
        {{ job }}
        | Salaire :
        {{ revenu | currency : 'EUR' : 'symbol' }} / moi
        <!-- (click)="" => Event Binding, qd click sur le bouton ça va lancer le javaScript fct oncliclButton() qui met la propriété à true (comme elle est lié au Class Binding le text concerné devient vert = embauché) -->
        <!-- $event  => passer en paramétre les information de l'événement EX afficher les coordonnés de la souries qd click-->
        <button (click)="oncliclButton($event.clientX)">Activation</button>

        <!-- (keydown)="onFrappeAuClavier($event)" -->
        <!-- Event filter => keydown.enter qd on appuie sur la touche Ex Enter fait qqc -->
        <input
          (keydown.enter)="onFrappeAuClavier($event)"
          type="text"
          placeholder="Nouveau Prénom"
        />
      </strong>
    </p>
    <hr />`,
  styles: [
    `
      .employ {
        color: green;
      }
      hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #003049;
        margin: 1em 0;
        padding: 0;
      }
    `,
  ],
})
export class UserProfileComponent {
  @Input('first-name')
  firstName = '';
  @Input('last-name')
  lastName = '';
  @Input('job')
  job = '';
  @Input('employee')
  isEmployee = false;

  revenu = 1200;

  avatar =
    'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png';

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit() {
    /* this.elementRef.nativeElement.innerHTML = `
    <h3>${this.firstName} ${this.lastName} </h3>
    Metier : <strong>${this.job} </strong>
    `; */
  }

  oncliclButton(coordX: number) {
    this.isEmployee = !this.isEmployee;
    console.log(coordX);
  }

  // onFrappeAuClavier(event: KeyboardEvent)
  onFrappeAuClavier(event: Event) {
    // if (event.key == 'Enter') {
    console.log('La touche Enter a été préssè');
    // nous permet de recupérer le texte entrè dans input et de valoriser l'attribut firstName qui va modifier son affichage sur le template
    this.firstName = (event.target as HTMLInputElement).value;
  }
}
