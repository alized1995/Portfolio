import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hiddenAboutMe: boolean = true;

toggleAboutMe(){
  this.hiddenAboutMe = this.hiddenAboutMe == true ? false : true;
}
}
