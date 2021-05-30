import { Component, OnInit } from '@angular/core';

import { StudyService } from 'src/app/services/study.service';

@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
  styleUrls: ['./study-create.component.scss']
})
export class StudyCreateComponent implements OnInit {
  study = {
    identifier: '',
    status: '',
    subject: '',
    encounter: '',
    started: new Date,
    basedOn: '',
    referrer: '',
    interpreter: '',
    numberOfSeries: 0,
    numberOfInstances: 0,
    procedureCode: 0,
    location: '',
    reasonCode: 0,
    description: ''
  };
  submitted = false;

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
  }

  createStudy(): void {
    const data = {
      name: this.study.identifier,
      description: this.study.description
    };

    this.studyService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStudy(): void {
    this.submitted = false;
    this.study = {
      identifier: '',
      status: '',
      subject: '',
      encounter: '',
      started: new Date,
      basedOn: '',
      referrer: '',
      interpreter: '',
      numberOfSeries: 0,
      numberOfInstances: 0,
      procedureCode: 0,
      location: '',
      reasonCode: 0,
      description: ''
    };
  }

}