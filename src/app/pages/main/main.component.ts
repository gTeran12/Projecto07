import { Component } from '@angular/core';
 //Importación de la interfaz
 import { User } from 'rest_courrier/interfaces/user';

 //Importación del servicio
 import { UserService } from 'rest_courrier/providers/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  constructor(private dataProvider: UserService) { }

  //Declaración de la variable que almacenará los datos
  public data : User[] = [];
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as User[]);
    })
  }

   /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
   displayedColumns: string[] = ['iduser','usermail','password'];
   dataSource = this.data;
}
