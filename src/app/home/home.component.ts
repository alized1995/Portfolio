import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  hiddenAboutMe: boolean = true;
toggleAboutMe(){
  this.hiddenAboutMe = this.hiddenAboutMe == true ? false : true;
}

ngOnInit(): void {
  
}

}
