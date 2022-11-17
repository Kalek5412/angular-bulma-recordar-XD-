import { Component, OnInit } from '@angular/core';
import { Tarea } from '../interfaces/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent implements OnInit {

  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
  }

  get tareas(){
    return this.tareasService.tareas.length
  }
  


 
}
