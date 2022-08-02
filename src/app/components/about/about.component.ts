import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent{
  portraitImg = "/assets/jellef_abbenseth.jpg"
  title_about = "About me 👩‍💻"
  title_toolkit = "My Toolkit 💻"
}
