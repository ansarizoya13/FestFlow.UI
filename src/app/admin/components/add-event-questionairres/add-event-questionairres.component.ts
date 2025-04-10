import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventLSModel, Questions } from '../../../common/models/eventLSModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-add-event-questionairres',
  standalone: false,
  
  templateUrl: './add-event-questionairres.component.html',
  styleUrl: './add-event-questionairres.component.css'
})
export class AddEventQuestionairresComponent {
  showOptions = false;

  questionTypes = [
    { label: 'Text', value: 'text' },
    { label: 'Email', value: 'email' },
    { label: 'Number', value: 'number' },
    { label: 'Date', value: 'date' },
    { label: 'Time', value: 'time' },
    { label: 'DateTime', value: 'datetime-local' },
    { label: 'Radio', value: 'radio' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Dropdown', value: 'dropdown' }
  ];

  questions: any[] = []

  constructor(private toastr : ToastrService, private router : Router, private userService : UserService) {
    this.addQuestion(); // Start with one by default
  }

  isMultiOption(type: string): boolean {
    return ['checkbox', 'dropdown'].includes(type);
  }

  addQuestion(): void {
    this.questions.push({
      questionText: '',
      questionType: 'text',
      mandatory: false,
      options: []
    });
  }

  removeQuestion(index: number): void {
    this.questions.splice(index, 1);
  }

  onTypeChange(q: any): void {
    if (q.questionType === 'radio') {
      q.options = ['Option 1', 'Option 2']; // Always two options
    } else if (this.isMultiOption(q.questionType)) {
      if (q.options.length === 0) {
        this.addOption(q);
      }
    } else {
      q.options = [];
    }
  }

  addOption(q: any): void {
    q.options.push('');
  }

  removeOption(q: any, index: number): void {
    q.options.splice(index, 1);
  }

  submitAll(form: any): void {
    if (form.valid) {
      const storedEvent = localStorage.getItem('event');

      if(storedEvent != null)
      {
          const eventResponse : EventLSModel = JSON.parse(storedEvent);
          eventResponse.questions = this.questions;
          
          this.userService.submitEventAndQuestion(eventResponse).subscribe((res : any) => {          
            
            localStorage.removeItem('event');
            this.toastr.success("Done");
            this.router.navigate(["admin/manage/events"]);

          }, (err : any) => {
            this.toastr.error("Something went wrong");
          })
      }
      else
      {
        localStorage.removeItem("event");
        this.toastr.error("Something went wrong");
      }
    }
    else
    {
      this.toastr.warning("Invalid form. Please check");
    }
  } 

  trackByIndex(index: number, item: any): any {
    return index;
  }
  
}
