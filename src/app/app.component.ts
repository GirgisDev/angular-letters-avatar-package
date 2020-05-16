import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    { name: "Girgis 1", id: 1 },
    { name: "Shaban Gomaa", id: 2 },
    { name: "Sarah samir", id: 3 },
    { name: "Amira Naser", id: 4 },
    { name: "Tarek Mostafa", id: 5 },
    { name: "Rania Ahmed", id: 6 },
    { name: "Mohamed Fathy", id: 7 },
    { name: "Heba", id: 8 },
  ]
}
