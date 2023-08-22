import { Component } from '@angular/core';

 //Importación de la interfaz
 import { User } from 'rest_courrier/interfaces/user';

 //Importación del servicio
 import { UserService } from 'rest_courrier/providers/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private dataProvider: UserService) { }

  //Declaración de la variable que almacenará los datos
  public data : User[] = [];

  public selectedUser: User | null = null;

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = (response as User[]);
    })
  }

   /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
   displayedColumns: string[] = ['iduser','usermail','password'];
   dataSource = this.data;

   seleccionarUsuario(user: User) {
    this.selectedUser = user;
  }
}
