import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

  

  constructor(private tareasService: TareasService) {
    
   }

  get tareas(){
    return this.tareasService.tareas
  }
  
  delete(tarea:Tarea){
    this.tareasService.deleteTarea(tarea.tarea);
  }

  complete(tarea: Tarea){
    this.tareasService.completeTarea(tarea.tarea);
  }


  ngOnInit(): void {
  }

}
