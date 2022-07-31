import { Component } from '@angular/core';

interface Informations {
  title: string;
  about: string;
  project: string;
  contact: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  linkedIn = "https://www.linkedin.com/in/jellef-abbenseth"
  linkedInImage = "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
  xing = "https://www.xing.com/profile/Jellef_Abbenseth"
  xingImage = "https://zangano.de/wp-content/uploads/2019/05/xing-icon-logo-png-transparent-450x529.png"
  gitHub = "https://github.com/JellefAbbenseth"
  gitHubImage = "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/92-icloud-512.png"
  engImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1a%2F91%2F9a%2F1a919ae84506acb892da6580f728b957.jpg&f=1&nofb=1"
  gerImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs1.1zoom.me%2Fb5050%2F556%2F338438-Berserker_1920x1080.jpg&f=1&nofb=1"
  //alttext: string = "under-construction";
  //path: string = "./assets/under-construction.png";
  language = "eng"
  title_text = "Hello! I'm Jellef. 👋"
  about_text = "About me" 
  project_text = "Projects"
  contact_text = "Connect with me:"

  /* Texts like title and other things in dict for language switching */
  texts_language: Record<string, Informations> = {
    "eng": {
      title: "Hello! I'm Jellef. 👋", 
      about: "About me", 
      project: "Projects",
      contact: "Connect with me:"
    },
    "de": {
      title: "Hallo! Ich bin Jellef. 👋", 
      about: "Über mich", 
      project: "Projekte",
      contact: "Kontakt:"
    },
  };

  onEng() {
    if (this.language != "eng") {
      this.language = "eng"
      this.setTexts()
    } 
  }

  onGer() {
    if (this.language != "de") {
      this.language = "de"
      this.setTexts()
    }
  }

  setTexts() {
    this.title_text = this.texts_language[this.language]["title"]
    this.about_text = this.texts_language[this.language]["about"] 
    this.project_text = this.texts_language[this.language]["project"]
    this.contact_text = this.texts_language[this.language]["contact"]
  }
}
