import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface Information {
  about: string;
  toolkit: string;
  texts: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, DoCheck {
  pythonImage = "/assets/logos/python_logo.png"
  javaImage = "/assets/logos/java_logo.png"
  angularImage = "/assets/logos/angular_logo.png"
  mysqlImage = "/assets/logos/mysql_logo.png"
  sqliteImage = "/assets/logos/sqlite_logo.png"
  githubImage = "/assets/logos/github_logo.png"
  gitlabImage = "/assets/logos/gitlab_logo.png"

  language = "eng"
  portraitImg = "/assets/jellef_abbenseth.jpg"
  title_about = "About me"
  title_toolkit = "My Toolkit"
  texts: string[] = []

  texts_language: Record<string, Information> = {
    "eng": {
      about: "About me",
      toolkit: "My Toolkit",
      texts: [
        "Hello, I'm an aspiring junior developer and am going to graduate my studies of information systems in Heidelberg around mid september 2022. I'm currently enjoying my journey to be a professional developer through different private projects and my internship as a full-stack-developer in Karlsruhe.",
        "Other than coding, I spend most of my free time learning chinese, meditating or staying in nature. I also like reading and meeting friends and new people to broaden my knowledge, mind and to have a good time enjoying live."
      ]
    },
    "de": {
      about: "Über mich",
      toolkit: "Meine Toolbox",
      texts: [
        "Hallo, Ich bin ein ergeiziger junior Entwickler und werde mitte September meine Ausbildung als Wirtschaftsinformatiker in Heidelberg abschließen. Derzeit genieße ich meine Reise zum professionellen Entwickler mit verschiedenen privaten Projekten und meinem Praktikum als Softwareentwickler in Karlsruhe.",
        "Wenn ich nicht gerade programmiere, verbringe ich meine Freizeit mit chinesisch lernen, meditieren oder bin drausen in der Natur. Weiterhin lese und treffe ich mich gerne mit Freunden und neuen Menschen um mein Wissen und Horizont zu erweitern, und mein Leben zu genießen."
      ]
    }
  }

  language$: Observable<string>;

  constructor(private store: Store<{ information: string }>) {
    this.language$ = store.select('information')
  }

  ngOnInit(): void {
    this.language$.subscribe(language => this.language = language)
    this.setTexts()
  }

  ngDoCheck(): void {
      this.setTexts()
  }

  setTexts() {
    this.title_about = this.texts_language[this.language]["about"]
    this.title_toolkit = this.texts_language[this.language]["toolkit"] 
    this.texts = this.texts_language[this.language]["texts"]
  }
}
