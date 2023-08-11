import { Component, Input, OnInit } from '@angular/core';
import { LessonDetail } from "../model/lesson-detail";
import { Observable } from "rxjs";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {

  lesson$!: Observable<LessonDetail>;

  constructor() {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {

  }



}
