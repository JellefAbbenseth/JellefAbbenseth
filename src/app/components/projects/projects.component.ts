import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface ProjectInformaiton {
  title: string;
  shortInfo: Record<string, string>;
  languages: string[];
  links: Links[];
  img: string;
}

interface Links {
  name: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, DoCheck {
  schoolProjectImage = "/assets/project-photos/Home_User.jpg"
  growthV2Image = "/assets/project-photos/growthV2.jpg"
  growthImage = "/assets/project-photos/growth.jpg"
  portfolioImage = "/assets/project-photos/portfolio_mainpage.jpg" 
  
  title = "Projects"
  language = "eng"
  language$: Observable<string>;
  
  projectInformations:  ProjectInformaiton[] = [
    {
      title: "School Project",
      shortInfo: {
        "eng": "A project, which was part of my curriculum.",
        "de": "Ein Projekt, welches Teil meiner Ausbildung war."
      },
      languages: ["Python", "Html", "CSS", "Flask", "SQLite"],
      links: [
        {
          name: "GITHUB",
          link: "https://github.com/JellefAbbenseth/schoolProject"
        }
      ],
      img: this.schoolProjectImage,
    },
    {
      title: "GrowthV2",
      shortInfo: {
        "eng": "A small text-based role-playing game with graphical user interface.",
        "de": "Ein kleines textbasiertes Rollenspiel mit grafischer Oberfläche."
      },
      languages: ["Java", "Swing"],
      links: [
        {
          name: "GITHUB",
          link: "https://github.com/JellefAbbenseth/Software-playground/tree/main/Intermediate/Java/GrowthV2"
        }
      ],
      img: this.growthV2Image,
    },
    {
      title: "Growth",
      shortInfo: {
        "eng": "A small text-based role-playing game.",
        "de": "Ein kleines textbasiertes Rollenspiel."
      },
      languages: ["Java"],
      links: [
        {
          name: "GITHUB",
          link: "https://github.com/JellefAbbenseth/Software-playground/tree/main/Simple/Java/Growth"
        }
      ],
      img: this.growthImage,
    },
    {
      title: "Portfolio",
      shortInfo: {
        "eng": "My portfolio website, to give a small overview over my projects.",
        "de": "Meine Portfolio-Webseite, für einen kleinen Überblick meiner Projekte."
      },
      languages: ["Angular", "Html", "CSS", "Typescript"],
      links: [
        {
          name: "GITHUB",
          link: "https://github.com/JellefAbbenseth/JellefAbbenseth"
        }
      ],
      img: this.portfolioImage
    },
  ]
  
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
    if(this.language == "eng") {
      this.title = "Projects"
      this.projectInformations[3]["img"] = "/assets/project-photos/portfolio_mainpage.jpg"
    }
    else {
      this.title = "Projekte"
      this.projectInformations[3]["img"] = "/assets/project-photos/portfolio_mainpage_ger.jpg"
    }
  }

  getLanguages(projectInfo: ProjectInformaiton) {
    return projectInfo["languages"]
  }

  getLinks(projectInfo: ProjectInformaiton) {
    return projectInfo["links"]
  }
}
