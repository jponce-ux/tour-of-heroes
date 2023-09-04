import { Component } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css'],
})
export class HeroFormComponent {
  constructor(private heroService: HeroService) {}

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  getFirstHero(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.model = heroes[0]);
  }
  newHero() {
    this.model = new Hero(undefined, '', '');
  }
  onSubmit() {
    this.heroService
      .addHero(this.model)
      .subscribe((hero) => (this.submitted = true));
  }

  ngOnInit(){
    this.getFirstHero();
  }
}
