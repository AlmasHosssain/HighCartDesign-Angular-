import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  public arr = [
    {
      id : 0,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
    {
      id : 1,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
    {
      id : 2,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
    {
      id : 3,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
    {
      id : 4,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
    {
      id : 5,
      name : 'Alams',
      img : 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      post : 'Software Engineer',
      email : 'almas@gmail.com',
      phone : '12309789',
      address : 'Bangladesh',
      joinDate : 'Joined 21 April,2021',
      inVisible : false
    },
  ]
  color : string = 'accent';
  checked = false;
  disabled = false;
  show : boolean = true

  ngOnInit(): void {

  }

  imgView=(index)=>{
    let selectedItem = this.arr.find((value)=>{
      return value.id === index
    })
    selectedItem.inVisible = !selectedItem.inVisible
  }
}
