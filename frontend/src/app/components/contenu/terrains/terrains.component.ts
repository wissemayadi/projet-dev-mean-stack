import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';

import { Terrains } from 'src/app/_models/terrains';
import { TerrainsService } from 'src/app/_services/terrains.service';
import { CentresService } from 'src/app/_services/centres.service';
import { Centres } from 'src/app/_models/centres';

@Component({
    selector: 'app-terrains',
    templateUrl: './terrains.component.html',
    styleUrls: ['./terrains.component.scss'],
    providers: [ConfirmationService, MessageService],
})
export class TerrainsComponent implements OnInit {
    public terrains: Terrains[] = [];
    public terrain: Terrains = new Terrains();
    public updateDialog: boolean = false;
    userlist1: any[] | undefined;
    userList = [];
    selecteduser = [];
    submitted: boolean | undefined;
    data: any;

    chartOptions: any;

    subscription: Subscription = new Subscription();

    //config: AppConfig;
    constructor(
        private terrainService: TerrainsService,
        private confirmationService: ConfirmationService,
        private CentreService: CentresService
    ) {}
    exportColumns!: any[];

    cols!: any[];
    colss!: any[];
    ngOnInit(): void {
        this.loadData();
    }

    loadData() {
        this.CentreService.getAllCentre().subscribe({
            next: (res) => {
                this.userlist1 = res.data;
                console.log(this.userlist1);
            },
            error: (err) => {
                console.error(err);
            },
        });

        this.terrainService.getAllTerrain().subscribe({
            next: (res) => {
                this.terrains = res.data;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }

    addChampDialog() {
        this.submitted = false;
        this.terrain = new Terrains();
        this.updateDialog = true;
    }

    updateChampDialog(champ: Terrains) {
        this.terrain = { ...champ };
        this.updateDialog = true;
    }
    openNew() {
        this.terrain;
        this.submitted = false;
        this.updateDialog = true;
    }

    updateChamp() {
        if (this.terrain._id) {
            this.terrainService.updateTerrain(this.terrain).subscribe({
                next: (res) => {
                    this.terrains[this.findIndexById(this.terrain._id)] =
                        res.data;
                },
            });
        } else {
            this.submitted = true;
            this.terrainService.addTerrain(this.terrain).subscribe({
                next: (res) => {
                    this.terrains.push(res.data);
                    this.terrains = [...this.terrains];
                    this.updateDialog = false;
                    this.terrain;
                },
            });
        }
    }

    deleteChamp(champ: Terrains) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + champ.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.terrainService.deleteTerrain(champ).subscribe({
                    next: (res) => {
                        this.terrains = this.terrains.filter(
                            (val) => val._id !== champ._id
                        );
                        console.log(res);
                    },
                });
            },
        });
    }

    log() {
        console.log(this.terrain);
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.terrains.length; i++) {
            if (this.terrains[i]._id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
    button = false;
    balanceAffiche(button: any) {
        return button === true ? 'red' : 'green';
    }
}
