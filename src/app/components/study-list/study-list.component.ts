import { Component, OnInit } from '@angular/core';
import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.scss']
})
export class StudyListComponent implements OnInit {

  studies: any;
  currentStudy = null;
  currentIndex = -1;
  identifier = -1;

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
    this.readStudies();
  }

  readStudies(): void {
    this.studyService.readAll()
      .subscribe(
        products => {
          this.studies = this.studies;
          console.log(this.studies);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readStudies();
    this.currentStudy = null;
    this.currentIndex = -1;
  }

  setCurrentStudy(study: any, index: any): void {
    this.currentStudy = study;
    this.currentIndex = index;
  }

  deleteAllStudies(): void {
    this.studyService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.readStudies();
        },
        error => {
          console.log(error);
        });
  }

  
  searchByIdentifier(): void {
    this.studyService.searchByID(this.identifier)
      .subscribe(
        studies => {
          this.studies = studies;
          console.log(studies);
        },
        error => {
          console.log(error);
        });
  }
  
}