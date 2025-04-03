import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoreService } from '../../services/core.service';
import InputElements from '../../../common/enums/inputElements';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-event',
  standalone: false,
  
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.css'
})
export class ViewEventComponent implements OnInit {

  eventWithQuestionairre : any;
  formData: any = {}; // Stores user input values
  inputElements = InputElements; // Enum reference

  constructor(private route : ActivatedRoute, private coreService : CoreService, private toastr : ToastrService){}

  ngOnInit(): void {
    this.getEventWithQuestionairre();
  }

  getEventWithQuestionairre()
  {
    let eventId = this.route.snapshot.paramMap.get('id');

    this.coreService.getEventWithQuestionairre(eventId || "").subscribe((res : any)=>{
      this.eventWithQuestionairre = res;      
    }, (err : any)=>{
      console.error(err);
    })

  }

  isBasicInput(type: number): boolean {
    return [InputElements.Text, InputElements.Email, InputElements.Number, 
            InputElements.Date, InputElements.Time, InputElements.DateTime].includes(type);
  }

  getInputType(type: number): string {
    switch (type) {
      case InputElements.Text: return 'text';
      case InputElements.Email: return 'email';
      case InputElements.Number: return 'number';
      case InputElements.Date: return 'date';
      case InputElements.Time: return 'time';
      case InputElements.DateTime: return 'datetime-local';
      default: return 'text';
    }
  }

  updateCheckbox(questionId: string, event: any) {
    if (!this.formData[questionId]) {
      this.formData[questionId] = [];
    }
    if (event.target.checked) {
      this.formData[questionId].push(event.target.value);
    } else {
      this.formData[questionId] = this.formData[questionId].filter((opt: string) => opt !== event.target.value);
    }
  }

  submitForm(eventForm: NgForm) {
    if (eventForm.invalid) {
      console.warn("Form validation failed!");
      return;
    }

    let formattedData = {
      responses: Object.keys(this.formData).map((key) => {
        const value = this.formData[key];
        return {
          eventQuestionnaireId: key,
          answer: (typeof value === 'string' && !isGuid(value)) ? value : null, // Set answer if it's not a GUID
          eventQuestionnaireOptionSetIds: (Array.isArray(value) || isGuid(value)) ? (Array.isArray(value) ? value : [value]) : null // Set option IDs if it's a GUID or an array
        };
      })
    };

    this.coreService.sendEventResponse(formattedData).subscribe((res : any)=>{
      
    }, (err : any) => {
      console.error(err);
    })
  }
}

const isGuid = (value: string) => /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(value);

