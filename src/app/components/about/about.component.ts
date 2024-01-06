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
  pythonImage = "./assets/logos/python_logo.png"
  javaImage = "./assets/logos/java_logo.png"
  angularImage = "./assets/logos/angular_logo.png"
  mysqlImage = "./assets/logos/mysql_logo.png"
  sqliteImage = "./assets/logos/sqlite_logo.png"
  githubImage = "./assets/logos/github_logo.png"
  gitlabImage = "./assets/logos/gitlab_logo.png"
  portraitImg = "./assets/jellef_abbenseth.jpg"

  language = "eng"
  title_about = "About me"
  title_toolkit = "My Toolkit"
  texts: string[] = []

  texts_language: Record<string, Information> = {
    "eng": {
      about: "About me",
      toolkit: "My Toolkit",
      texts: [
        "Hi there 👋, ",
        "I’m a growing software developer and data scientist. Currently happily and satisfied working as a junior software developer in Karlsruhe with a great team on Identity Management Systems. During my free time I’m working on different projects to expand my developer and data science skills. I really love to see my skills growing over time.",
        "Other than coding, I spend most of my free time learning Chinese, meditating, doing sports, meeting friends or staying in nature. It’s great to have such different experiences. Therefore, I love to meet different people, my friends or just broaden my knowledge and horizons while enjoying my life."
      ]
    },
    "de": {
      about: "Über mich",
      toolkit: "Meine Toolbox",
      texts: [
        "Hi 👋, ",
        "Ich bin ein wachsender Softwareentwickler und Data Scientist. Derzeit arbeite ich glücklich und zufrieden als Junior-Softwareentwickler in Karlsruhe mit einem tollen Team im Bereich Identity Management Systems. In meiner Freizeit programmiere ich verschiedene Projekte, um meine Entwickler- und Datenwissenschaftskenntnisse zu erweitern. Ich liebe es zu sehen, wie meine Fähigkeiten mit der Zeit wachsen.",
        "Abgesehen vom Programmieren verbringe ich den Großteil meiner Freizeit damit, Chinesisch zu lernen, zu meditieren, Sport zu treiben, Freunde zu treffen oder mich in der Natur aufzuhalten. Es ist spannend, solch unterschiedliche Erfahrungen zu machen. Deshalb liebe ich es, andere Menschen kennenzulernen und Freunde zu treffen oder einfach mein Wissen und meinen Horizont zu erweitern und gleichzeitig mein Leben zu genießen."
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
