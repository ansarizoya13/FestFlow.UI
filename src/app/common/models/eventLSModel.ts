export class Questions 
{
    questionText : string;
    questionType : string;
    mandatory : boolean;
    options : string[]
}

export class EventLSModel {
    name : string;
    description : string;
    branches : string[];
    questions : Questions[]
}

