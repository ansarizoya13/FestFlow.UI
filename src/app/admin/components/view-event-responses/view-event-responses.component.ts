import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-view-event-responses',
  standalone: false,
  
  templateUrl: './view-event-responses.component.html',
  styleUrl: './view-event-responses.component.css'
})
export class ViewEventResponsesComponent implements OnInit {

  groupedAnswers : any[] = []
  
  chartDataMap: { [questionId: string]: any[] } = {};
  
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#0d6efd', '#198754', '#dc3545', '#ffc107', '#6f42c1']
  };

  constructor(private userService : UserService, 
    private route : ActivatedRoute,
    private toastr : ToastrService) 
    {}

  ngOnInit(): void {
    let eventId = this.route.snapshot.paramMap.get('id') || "";
    this.getEventQuestionsAnswers(eventId);
  }

  getEventQuestionsAnswers(eventId : string)
  {
    this.userService.getEventsQuestionsAnsswers(eventId).subscribe((data : any) => {
      const grouped = new Map<string, any>();

    for (const item of data) {
      if (!grouped.has(item.eventQuestionnaireID)) {
        grouped.set(item.eventQuestionnaireID, {
          eventQuestionnaireID: item.eventQuestionnaireID,
          questionLabel: item.questionLabel,
          sequence: item.sequence,
          answerCount: item.answerCount,
          answers: []
        });
      }

      if (item.answer) {
        grouped.get(item.eventQuestionnaireID).answers.push({
          answerID: item.answerID,
          userId: item.userId,
          answer: item.answer
        });
      }
    }

    // Convert Map to sorted array by sequence
    this.groupedAnswers = Array.from(grouped.values()).sort(
      (a, b) => a.sequence - b.sequence);      

    this.generateChartData();

    }, (err : any) => {
      this.toastr.error('Something went wrong');
    })
  }

  generateChartData() {
    for (const question of this.groupedAnswers) {
      const grouped = question.answers.reduce((acc: any, curr: any) => {
        acc[curr.answer] = (acc[curr.answer] || 0) + 1;
        return acc;
      }, {});
      const chartData = Object.entries(grouped).map(([name, value]) => ({ name, value }));
      this.chartDataMap[question.eventQuestionnaireID] = chartData;
    }
  }
}
