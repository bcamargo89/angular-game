import { Component,  Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-game',
  templateUrl: './detail-game.component.html',
  styleUrls: ['./detail-game.component.css']
})
export class DetailGameComponent implements OnInit{


  @Input() gameDetail?: string;
  @Input() childMessage?: string;

  @Input() idDet?: string;
  @Input() titleDet?: string;
  @Input() descriptionDet?: string;
  @Input() urlDet?: string;
  @Input() imageDet?: string;
  @Input() categoryDet?: string;
  @Input() plataformaDet?: string;
  @Input() dateDet?: string;
  @Input() creadorDet?: string;
  @Input() developerDet?: string;

  
  

 

  constructor() {}
  ngOnInit(): void {
    
  }
  


}
