import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Arbitre } from 'src/app/_models/arbitre';
import { ArbitreService } from 'src/app/_services/arbitre.service';

@Component({
    selector: 'app-arbitre',
    templateUrl: './arbitre.component.html',
    styleUrls: ['./arbitre.component.scss'],
    providers: [ConfirmationService, MessageService],

})
export class ArbitreComponent implements OnInit {
    public arbitres: Arbitre[] = [];
    public arbitre: Arbitre = new Arbitre();
    public updateDialog: boolean = false;
    submitted: boolean | undefined;
  championnatService: any;
  championnats: any;
    constructor(
        private ArbitreService: ArbitreService,
        private ConfirmationService: ConfirmationService
    ) {}
    cols!: any[];
    ngOnInit(): void {
        this.loadData();
        this.cols = [
          { field: 'nom', header: 'Nom', customExportHeader: 'nom' },
         
      ];

    }
    loadData() {
      this.ArbitreService.getAllArbitre().subscribe({
            next: (res) => {
                this.arbitres = res.data;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
    addChampDialog() {
      this.submitted = false;
      this.arbitre = new Arbitre();
      this.updateDialog = true;
  }
  updateChampDialog(champ: Arbitre) {
    this.arbitre = { ...champ };
    this.updateDialog = true;
}
openNew() {
    this.arbitre;
    this.submitted = false;
    this.updateDialog = true;
}

updateChamp() {
    if (this.arbitre._id) {
        this.ArbitreService
            .updateChampionnat(this.arbitre)
            .subscribe({
                next: (res) => {
                    this.arbitres[
                        this.findIndexById(this.arbitre._id)
                    ] = res.data;
                    this.updateDialog = false;
                },
            });
    } else {
        this.submitted = true;
        this.ArbitreService.addChampionnat(this.arbitre).subscribe({
            next: (res) => {
                this.arbitres.push(res.data);
                this.arbitres = [...this.arbitres];
                this.updateDialog = false;
                // this.arbitres;  // reopen with ancien data
            },
        });
    }
}


deleteChamp(champ: Arbitre) {
  this.ConfirmationService.confirm({
      message: 'Vous etes sur de supprimer ' + champ.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.ArbitreService.deleteChampionnat(champ).subscribe({
              next: (res) => {
                  this.arbitres = this.arbitres.filter(
                      (val: { _id: string; }) => val._id !== champ._id
                  );
                  console.log(res);
              },
          });
      },
  });
}



findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.arbitres.length; i++) {
      if (this.arbitres[i]._id === id) {
          index = i;
          break;
      }
  }
  return index;
}

}
