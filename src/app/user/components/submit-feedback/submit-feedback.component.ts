import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoreService } from '../../services/core.service';
import submitFeedbackModel from '../../../common/models/submitFeedbackModel';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-submit-feedback',
  standalone: false,
  
  templateUrl: './submit-feedback.component.html',
  styleUrl: './submit-feedback.component.css'
})
export class SubmitFeedbackComponent {

  constructor(private coreService : CoreService, 
    private route : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router
  ) {}

  stars : number[] = [1, 2, 3, 4, 5]

  selectedRating: number = 0;
  description : string = "";

  setRating(rating: number) {
    this.selectedRating = rating;
  }

  submitFeedback(form : any) {

    let eventIdParam = this.route.snapshot.paramMap.get('id') || "";

    if(form.valid) 
    {
      const feedbackData : submitFeedbackModel = {
        rating: this.selectedRating,
        comments: this.description,
        eventId : eventIdParam
      };

      this.coreService.submitFeedback(feedbackData).subscribe((res : any)=>{
        this.toastr.success("Done");
        setTimeout(()=>{
        this.router.navigate(["user/feedbacks"]);
        },1000);
      }, (err : any) => {
        this.toastr.error("Something went wrong");
      })
    } 
  }
}
