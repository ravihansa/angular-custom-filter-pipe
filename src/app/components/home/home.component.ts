import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipes = [
    {
       "id":1,
       "name":"Burger"
    },
    {
       "id":2,
       "name":"French Fries"
    },
    {
       "id":3,
       "name":"Chowmein"
    }
  ];
  
  
  ingredients = [
    {
       "id":1,
       "parentId":1,
       "name":"Potatoes"
    },
    {
       "id":2,
       "parentId":1,
       "name":"Beans"
    },
    {
       "id":3,
       "parentId":1,
       "name":"Buns"
    },
    {
       "id":4,
       "parentId":1,
       "name":"Carrots"
    },
    {
       "id":5,
       "parentId":2,
       "name":"Cooking Oil"
    },
    {
       "id":6,
       "parentId":2,
       "name":"Potatoes"
    },
    {
       "id":7,
       "parentId":2,
       "name":"Pepper"
    },
    {
       "id":8,
       "parentId":2,
       "name":"Salt"
    },
    {
       "id":9,
       "parentId":3,
       "name":"Hakka Noodles"
    },
    {
       "id":10,
       "parentId":3,
       "name":"Green Vegies"
    },
    {
       "id":11,
       "parentId":3,
       "name":"Tomato Sauce"
    },
    {
       "id":12,
       "parentId":3,
       "name":"Soya Souce"
    }
  ];

}
