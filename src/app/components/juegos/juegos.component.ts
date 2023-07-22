import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { ApiService } from 'src/app/services/api.service';
import { fromEvent, Subscription} from 'rxjs';
import { debounceTime,map, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})

export class JuegosComponent implements AfterViewInit, OnInit, OnDestroy {


  public page!: number;
  
  status: string = 'loading';
  data: Juego[] = [];
  cadSearch: string = '';
  


  @ViewChild('searchInput',{ static: true }) 
  input!: ElementRef;
  private subscription!: Subscription;
  
  public title: string = '';

  @Output()
  eventData: EventEmitter<Juego> = new EventEmitter<Juego>();

  constructor(private apiService: ApiService) {}
  ngAfterViewInit() : void{
    this.inputKey();

  }
  

  inputKey() {
    const term$ = fromEvent<any>(this.input!.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      );
   this.subscription = term$
      .subscribe(
        res => this.apiService.emitText(res)
      );
  }

  verJuego(juego: Juego){
    this.eventData.emit(juego);
    //this.title = juego.title;
    // console.log(juego);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  getJuegos(){
    this.apiService
    .getData()
    .then(async (juegoData: Response) => {
      this.data = await juegoData.json();
      this.status = 'ready';
    })
    .catch((error: Error) => {
      this.status = 'error';
      console.error('There was an error!', error);
    });
  }

  filterJuegosByCategory(characters: string){
    this.cadSearch += characters;
    
    if((characters !== '') && (characters.length > 1)){
      this.getJuegosByCategory(characters);
    }else{
      if(this.cadSearch ===''){
        this.getJuegos();
      }
    }

  }


  ngOnInit(): void {
      this.getJuegos();

      this.apiService.textObservable.subscribe(
        text => {
         this.filterJuegosByCategory(text)
         if(text === ''){
            this.getJuegos();
         }
        }
      )
    
  }

  getJuegosByCategory(characters: string){
    this.apiService
    .getDataByCategory(characters)
    .then(async (juegoData: Response) => {
      this.data = await juegoData.json();
      this.status = 'ready';
      console.log('data category', this.data);
    })
    .catch((error: Error) => {
      this.status = 'error';
      console.error('No se econtro el filtro!', error);
    });
  }
  
} 


