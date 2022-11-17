import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor() { }

  tareas:Array<Tarea>=[
    {
      tarea:'spring',
      completada:false
    },
    {
      tarea:'angular',
      completada:false
    },
    {
      tarea:'mysql',
      completada:false
    },
    {
      tarea:'java',
      completada:false
    }
    ];

  deleteTarea(nombreTarea: string){
    this.tareas=this.tareas.filter((tarea)=>tarea.tarea!==nombreTarea)
  }

  completeTarea(nombreTarea: string){
    const tarea: Tarea= this.tareas.find(tarea=>{
      return tarea.tarea==nombreTarea;
    })!

    tarea.completada=!tarea.completada;

    console.log(tarea);
  }
}
