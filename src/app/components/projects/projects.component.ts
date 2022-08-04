import { Component, DoCheck, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
    if(this.language == "eng") this.title = "Projects"
    else this.title = "Projekte"
  }
}
