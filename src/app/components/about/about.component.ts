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
  language = "eng"
  portraitImg = "/assets/jellef_abbenseth.jpg"
  title_about = "About me"
  title_toolkit = "My Toolkit"
  text_one = ""
  text_two = ""

  texts_language: Record<string, Information> = {
    "eng": {
      about: "About me",
      toolkit: "My Toolkit",
      texts: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias minima sint non. Molestias fugiat, pariatur unde dolorum beatae eaque ad quae eos voluptatem praesentium ipsum cum suscipit accusamus eum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias minima sint non. Molestias fugiat, pariatur unde dolorum beatae eaque ad quae eos voluptatem praesentium ipsum cum suscipit accusamus eum!"
      ]
    },
    "de": {
      about: "Über mich",
      toolkit: "Meine Toolbox",
      texts: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias minima sint non. Molestias fugiat, pariatur unde dolorum beatae eaque ad quae eos voluptatem praesentium ipsum cum suscipit accusamus eum!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem alias minima sint non. Molestias fugiat, pariatur unde dolorum beatae eaque ad quae eos voluptatem praesentium ipsum cum suscipit accusamus eum!"
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
    this.text_one = this.texts_language[this.language]["texts"][0]
    this.text_two = this.texts_language[this.language]["texts"][1]
  }
}
