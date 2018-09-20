import { Component, OnInit } from '@angular/core'
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { HttpClient } from '@angular/common/http' //这里是HttpClient

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]

  selectedHero: Hero

  constructor(private heroService: HeroService, private http: HttpClient) {}

  ngOnInit() {
    this.getHeroes()
    this.http.get('api/test/hello').subscribe(res => {
      console.log(res)
    })
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes))
  }
}
