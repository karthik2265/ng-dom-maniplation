import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 #superhero1>I'am Batman</h1>
    <ng-container #superheroes></ng-container>
    <button (click)="addSuperHero()">Add Superhero</button>
    <ng-template #template>
      <h1>Superman</h1>
    </ng-template>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('superhero1') superhero1!: ElementRef;
  @ViewChild('template') myTemplate!: TemplateRef<any>;
  @ViewChild('superheroes', { read: ViewContainerRef })
  superheroes!: ViewContainerRef;

  ngAfterViewInit(): void {
    console.log(this.superhero1.nativeElement.textContent); // outputs: I'am Batman
  }

  addSuperHero() {
    const templateView = this.myTemplate.createEmbeddedView(null);
    this.superheroes.insert(templateView);
  }
}
