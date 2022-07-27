import { Component, OnInit } from '@angular/core';
import { ConfirmationService,MessageService } from 'primeng/api';
import { Subscription } from 'rxjs/internal/Subscription';
import { Centres } from 'src/app/_models/centres';
import { Terrains } from 'src/app/_models/terrains';
import { CentresService } from 'src/app/_services/centres.service';
import { TerrainsService } from 'src/app/_services/terrains.service';

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class CentresComponent implements OnInit {
  public centres: Centres[] = [];
    public centre: Centres = new Centres();
    public updateDialog: boolean = false;
    userlist = [];
    selecteduser = [];
    submitted: boolean | undefined;
    data: any;

    chartOptions: any;

    subscription: Subscription = new Subscription();

    //config: AppConfig;
    constructor(
        private terrainService: TerrainsService,
        private confirmationService: ConfirmationService,
        private centreService: CentresService
    ) {}
    exportColumns!: any[];

    cols!: any[];
    colss!: any[];
    ngOnInit(): void {
        this.loadData();
        console.log("ssssss",this.userlist);
      
    }

    loadData() {
        this.terrainService.getAllTerrain().subscribe({
            next: (res) => {
                this.userlist = res.data;
               let name=this.userlist;
                
                console.log("load",name[2]);
            },
            error: (err) => {
                console.error(err);
            },
        });

        this.centreService.getAllCentre().subscribe({
            next: (res) => {
                // console.log(res.data);
                this.centres = res.data;
                // console.log(this.userlist.length);
                // console.log(this.centre);
                
                
            },
            error: (err) => {
                console.error(err);
            },
        });
    }


   
    addChampDialog() {
        this.submitted = false;
        this.centre = new Centres();
        this.updateDialog = true;
    }

    updateChampDialog(champ: Centres) {
        this.centre = { ...champ };
        this.updateDialog = true;
    }
    openNew() {
        this.centre;
        this.submitted = false;
        this.updateDialog = true;
    }

    updateChamp() {
        if (this.centre._id) {
            this.centreService
                .updateCentre(this.centre)
                .subscribe({
                    next: (res) => {
                        this.centres[
                            this.findIndexById(this.centre._id)
                        ] = res.data;
                    },
                });
        } else {
            this.submitted = true;
            this.centreService.addCentre(this.centre).subscribe({
                next: (res) => {
                    this.centres.push(res.data);
                    this.centres = [...this.centres];
                    this.updateDialog = false;
                    this.centre;  
                },
            });
        }
    }

    deleteChamp(champ: Centres) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + champ.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.centreService.deleteCentre(champ).subscribe({
                    next: (res) => {
                        this.centres = this.centres.filter(
                            (val) => val._id !== champ._id
                        );
                        console.log(res);
                    },
                });
            },
        });
    }

    log() {
        console.log(this.centre.terrain);
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.centres.length; i++) {
            if (this.centres[i]._id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
   
}
