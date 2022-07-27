import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Player} from "../../../_models/Player";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {Team} from "../../../_models/Team";
import {TeamsService} from "../../../_services/teams.service";


@Component({
  selector: 'app-equipe-form',
  templateUrl: './equipe-form.component.html',
  styleUrls: ['./equipe-form.component.css']
})
export class EquipeFormComponent implements  OnInit, OnDestroy {

  team?: Team ;
  form!: FormGroup ;
  teamId = -1
  @Output() onCancel = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Player>();
  private unsubscribe$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private teamService: TeamsService,
  ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {

    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (params) => {
        const id = params['teamId'];
        if(id){
          this.teamId = id
            this.teamService.getOneById(id).pipe(takeUntil(this.unsubscribe$)).subscribe(
            (team) => {
              this.team = team;

              this.initForm(team);
            }
          );
        }else{
          this.team =  new Team()
          this.initEmptyForm();
        }

      },
      (error) => {
        console.log(error)
      }
    );
  }

  submitForm() {
    if (this.form.valid) {
      const newTeam = new Team();
      // @ts-ignore
      newTeam._id = this.team._id;
      newTeam.name = this.form.controls['name'].value;
      newTeam.maxSize = this.form.controls['maxSize'].value;

      if(newTeam._id !== undefined ){
        this.teamService.edit(newTeam).pipe(takeUntil(this.unsubscribe$)).subscribe(
          (data) => {
            this.router.navigate(['/equipes']);
          },
          (error) => {
            console.log(error)
          })
      }else{
        this.teamService.create(newTeam).pipe(takeUntil(this.unsubscribe$)).subscribe(
          (data) => {
            this.router.navigate(['/equipes']);
          },
          (error) => {
              console.log(error)
          })
      }

    } else {
      this.form.markAllAsTouched();
    }
  }


  initForm(team:Team) {
    this.form = new FormGroup({
      name: new FormControl(team.name, [Validators.required, Validators.minLength(2)]),
      maxSize: new FormControl(team.maxSize, [Validators.required]),
    });
  }
  initEmptyForm() {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      maxSize: new FormControl(null, [Validators.required]),
    });
  }

  back() {
    this.onCancel.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
