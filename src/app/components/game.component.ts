import { Component , OnInit } from '@angular/core';
import {  Router , ActivatedRoute, Params} from '@angular/router';
import { GameService } from '../services/game.service';


@Component({
  selector: 'game-init',
  templateUrl: '../views/game.html',
  providers: [GameService]

})

export class GameComponent implements OnInit {

  public title: string;
  public play: boolean;
  public played: boolean;
  public init_positions: any[];
  public final_positions: any[];
  public num_movements: any;
  public input_movements: any[];
  public movements: any[];
  public errorMessage: any[];
  public validate: boolean;




  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _gameService: GameService,


  ) {



  }
  ngOnInit( ){
    this.init_positions = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
    this.final_positions = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
    this.play = false;
    this.played = false;
    this.movements = [];
    this.validate = true;

    console.log("Componente del juego cargado");
  }

  getInputMovements(val: any) {

    this.input_movements = []

    for(var i = 0; i<val; i++) {
      this.input_movements.push(i);
    }
      if(this.input_movements != []) {
        this.play = true;
      } else {
        this.play = false;
      }

  }


 getFinalPositions() {

  if(this.validate || this.movements == []) {
    this.played = true;
    this.final_positions = this._gameService.getFinalPositions(this.init_positions, this.movements)
  }

 }

 repeatGame() {
   this.init_positions = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
   this.final_positions = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
   this.play = false;
   this.played = false;
   this.movements = [];
   this.num_movements = 0;
   this.getInputMovements(this.num_movements)

 }

 validateGrid(val: any) {
   if(val > 0 && val <= 2048) {
      this.validate = true;
   } else {
     this.validate = false;
   }
 }

}
