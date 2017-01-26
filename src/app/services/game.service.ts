import {Injectable } from '@angular/core';
import {Http , Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';




@Injectable()
export class GameService{

public size  = [0,1,2,3];
public inverseSize  = [3,2,1,0];

constructor(){



}


  getFinalPositions( init_positions: any , movements: any  )  {
        var final_positions = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];

        for(var movement of  movements) {

            switch(movement) {
                case "1":
                    final_positions =  this.leftMovement(init_positions)
                    break;
                case "2":
                    final_positions =  this.rightMovement(init_positions)
                    break;
                case "3":
                    final_positions =  this.downMovement(init_positions)
                    break;
                case "4":
                     final_positions = this.upMovement(init_positions)
                    break;

              }
              final_positions = this.addGrid(final_positions)
            }

return final_positions;

}


  leftMovement(init_positions: any) {
    for(var i of this.size) {
       for(var j of this.size) {

         if(j != 3) {
               if(init_positions[i][j] == 0) {
                 if(init_positions[i][j + 1] == 0 && j == 1) {
                   init_positions[i][j] = init_positions[i][j + 2]
                   init_positions[i][j + 2] = 0;
                 } else {
                  init_positions[i][j] = init_positions[i][j + 1];
                  init_positions[i][j + 1] = 0;
                 }
                  if(j != 0) {
                  if(init_positions[i][j] == init_positions[i][j - 1]) {
                    if(init_positions[i][j] + init_positions[i][j - 1] < 2048) {
                    init_positions[i][j - 1] = init_positions[i][j] + init_positions[i][j - 1];
                    init_positions[i][j] = 0;
                  }
                  }
                  }

                  }

                  if(init_positions[i][j] == init_positions[i][j + 1 ]) {
                    if(init_positions[i][j] + init_positions[i][j + 1] < 2048) {
                    init_positions[i][j] = init_positions[i][j] + init_positions[i][j + 1];
                    init_positions[i][j + 1 ] = 0;
                  }
                  }
                  if(j == 2) {
                  if(init_positions[i][j - 2] == 0 ){
                    init_positions[i][j - 2] = init_positions[i][j - 1];
                    init_positions[i][j - 1] = 0;
                  }
                }
              }
          }
       }
  return init_positions;
  }


  rightMovement(init_positions: any) {
    for(var i of this.inverseSize) {
       for(var j of this.inverseSize) {

         if(j != 0) {
               if(init_positions[i][j] == 0) {
                 if(init_positions[i][j - 1] == 0 && j == 2) {
                   init_positions[i][j] = init_positions[i][j - 2]
                   init_positions[i][j - 2] = 0;
                 } else {
                  init_positions[i][j] = init_positions[i][j - 1];
                  init_positions[i][j - 1] = 0;
                 }
                  if(j != 3) {
                  if(init_positions[i][j] == init_positions[i][j + 1]) {
                    if(init_positions[i][j] + init_positions[i][j + 1] < 2048) {
                    init_positions[i][j + 1] = init_positions[i][j] + init_positions[i][j + 1];
                    init_positions[i][j] = 0;
                  }
                  }
                  }

                  }

                  if(init_positions[i][j] == init_positions[i][j - 1 ]) {
                    if(init_positions[i][j] + init_positions[i][j - 1] < 2048) {
                    init_positions[i][j] = init_positions[i][j] + init_positions[i][j - 1];
                    init_positions[i][j - 1 ] = 0;
                  }
                  }
                  if(j == 1) {
                  if(init_positions[i][j + 2] == 0){
                    init_positions[i][j + 2] = init_positions[i][j + 1];
                    init_positions[i][j + 1] = 0;
                  }
                }
              }
          }
       }
       return init_positions;
    }



  downMovement(init_positions: any) {
    for(var i of this.size) {
       for(var j of this.inverseSize) {

         if(j != 0) {
               if(init_positions[j][i] == 0) {
                 if(init_positions[j - 1][i] == 0 && j == 2) {
                   init_positions[j][i] = init_positions[j - 2][i]
                   init_positions[j - 2][i] = 0;
                 } else {
                  init_positions[j][i] = init_positions[j - 1][i];
                  init_positions[j - 1][i] = 0;
                 }
                  if(j != 3) {
                  if(init_positions[j][i] == init_positions[j + 1][i]) {
                    if(init_positions[i][j] + init_positions[j + 1][i] < 2048) {
                    init_positions[j + 1][i] = init_positions[j][i] + init_positions[j + 1][i];
                    init_positions[j][i] = 0;
                  }
                  }
                  }

                  }

                  if(init_positions[j][i] == init_positions[j - 1][i]) {
                    if(init_positions[i][j] + init_positions[j - 1][i] < 2048) {
                    init_positions[j][i] = init_positions[j][i] + init_positions[j - 1][i];
                    init_positions[j - 1][i] = 0;
                  }
                  }
                  if( j == 1) {
                  if(init_positions[j + 2][i] == 0){
                    init_positions[j + 2][i] = init_positions[j + 1][i];
                    init_positions[j + 1][i] = 0;
                  }
                }
              }
          }
       }
  return init_positions;
  }

  upMovement(init_positions: any) {
    for(var i of this.size) {
       for(var j of this.size) {

         if(j != 3) {
               if(init_positions[j][i] == 0) {
                 if(init_positions[j + 1][i] == 0 && j == 1) {
                   init_positions[j][i] = init_positions[j + 2][i]
                   init_positions[j + 2][i] = 0;
                 } else {
                  init_positions[j][i] = init_positions[j + 1][i];
                  init_positions[j + 1][i] = 0;
                 }
                  if(j != 0) {
                  if(init_positions[j][i] == init_positions[j - 1][i]) {
                    if(init_positions[i][j] + init_positions[j - 1][i] < 2048) {
                    init_positions[j - 1][i] = init_positions[j][i] + init_positions[j - 1][i];
                    init_positions[j][i] = 0;
                  }
                  }
                  }

                  }

                  if(init_positions[j][i] == init_positions[j + 1][i]) {
                    if(init_positions[i][j] + init_positions[j + 1][i] < 2048) {
                    init_positions[j][i] = init_positions[j][i] + init_positions[j + 1][i];
                    init_positions[j + 1][i] = 0;
                  }
                  }
                  if(j==2) {
                  if(init_positions[j - 2][i] == 0 ){
                    init_positions[j - 2][i] = init_positions[j - 1][i];
                    init_positions[j - 1][i] = 0;
                  }
                }
              }
          }
       }
  return init_positions;
  }


  addGrid(init_positions: any) {
    for(var i of this.size) {
       for(var j of this.size) {
         if(init_positions[i][j] == 0){
           init_positions[i][j] = 2;
           return init_positions;
         }
       }
     }
     return null;
  }



}
