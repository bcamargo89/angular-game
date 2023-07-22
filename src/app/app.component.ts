import { Component, OnInit } from '@angular/core';
import { Juego } from './models/juego';
import { Router } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailGameComponent } from './components/detail-game/detail-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class AppComponent implements OnInit{
  title = 'prueba';
   
 
  //parentMessage = "message from parent";

  idJuego="";
  parentMessage= "Juego";
/*
   idDetJuego?: string;
   titleDetJuego?: string;
   descriptionDetJuego?: string;
   urlDetJuego?: string;
   imageDetJuego?: string;
   categoryDetJuego?: string;
   plataformaDetJuego?: string;
   dateDetJuego?: string;
   creadorDetJuego?: string;
   developerDetJuego?: string;
*/
   
  data?: any
   constructor(config: NgbModalConfig, private modalService: NgbModal,private router:Router) {
		// customize default values of modals used by this component tree
		
    
	}
 
  ngOnInit(): void {
    
  }

  dataJuego(juego: Juego): void{
   // console.log(juego);
    this.parentMessage = juego.title;
    this.idJuego = juego.id;
    
   // this.idDetJuego = juego.id;
   // this.titleDetJuego=juego.title;
   // this.descriptionDetJuego=juego.short_description;

    //this.urlDetJuego=juego.game_url;
    //this.imageDetJuego=juego.thumbnail;
    //this.categoryDetJuego=juego.genre;
    //this.plataformaDetJuego= juego.platform ;
   // this.dateDetJuego= juego.release_date;
    //this.creadorDetJuego= juego.publisher;
    //this.developerDetJuego=juego.developer;
   
    const modalRef = this.modalService.open(DetailGameComponent,{ centered: true, size: 'md'});
    modalRef.componentInstance.idDet =  juego.id;
    modalRef.componentInstance.titleDet =  juego.title;
    modalRef.componentInstance.descriptionDet =  juego.short_description;
    modalRef.componentInstance.urlDet =  juego.game_url;
    modalRef.componentInstance.imageDet =  juego.thumbnail;
    modalRef.componentInstance.categoryDet =  juego.genre;
    modalRef.componentInstance.plataformaDet =  juego.platform;
    modalRef.componentInstance.dateDet =  juego.release_date;
    modalRef.componentInstance.creadorDet =  juego.publisher;
    modalRef.componentInstance.developerDet =  juego.developer;



    
   
  
  }

  
}
