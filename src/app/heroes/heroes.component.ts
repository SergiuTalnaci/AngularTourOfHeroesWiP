import { Component, OnInit } from '@angular/core';

import { Hero } from "../Models/hero";
import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]  //Injection way: he providers array tells Angular to create a fresh instance of the HeroService when it creates an AppComponent
})

export class HeroesComponent implements OnInit {
  title: 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  //heroService = new HeroService(); Never ever fucking do this, if you do this you are worse than KMD, use injection instead
  constructor(private heroService: HeroService) { } //Injection way: https://angular.io/docs/ts/latest/guide/dependency-injection.html
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }


}

