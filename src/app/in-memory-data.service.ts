import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from "./hero";

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  
  createDb() {
    const heroes = [
      {id: 1, name: "Techies"},
      {id: 2, name: "Thato Mekwa"},
      {id: 3, name: "Ashlegh Moodley"},
      {id: 4, name: "Sedeshtra Pillay"},
      {id: 5, name: "Robyn Van Bergen"},
      {id: 6, name: "Khadeejah Chopdat"},
      {id: 7, name: "Tumelo Ratefane"},
      {id: 8, name: "Nomxolisi Nxisha"},
      {id: 9, name: "Muammer Essa"},
      {id: 10, name: "Micheal Mpofu"},
      {id: 11, name: "Nureen Khan"},
      {id: 12, name: "Ziyaad Hoosein"}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 12;
  }
}
