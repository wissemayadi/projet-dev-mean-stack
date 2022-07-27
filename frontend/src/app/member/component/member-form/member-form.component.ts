import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import { Player } from "../../../_models/Player";
import { PlayerServiceHttp} from "../../../_services/player.service";
import {Team} from "../../../_models/Team";
import {TeamsService} from "../../../_services/teams.service";

@Component({
  selector: 'app-member-form',
  templateUrl: 'member-form.component.html',
  styleUrls: ['member-form.component.scss']
})
export class MemberFormComponent implements OnInit, OnDestroy {

  member?: Player ;
  form!: FormGroup ;
  teams: Team[] = [];

  @Output() onCancel = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Player>();
  private unsubscribe$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private memberService: PlayerServiceHttp,
              private readonly teamService : TeamsService,
              ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {

    this.activatedRoute.params.pipe(takeUntil(this.unsubscribe$)).subscribe(
      (params) => {
        const id = params['playerId'];
        this.memberService.getOneById(id).pipe(takeUntil(this.unsubscribe$)).subscribe(
          (member: Player ) => {
            this.member = member;
            this.teamService.getAllTeams().pipe(takeUntil(this.unsubscribe$)).subscribe(
              (data) => {
                this.teams = data;
                let selectedTeam = data.filter((team) => {
                  return team._id == member.squad
                });
                // @ts-ignore
                this.member?.squad = selectedTeam[0]
                console.log(data.filter((team) => {
                  return team._id === member.squad
                }))
                this.initForm(member);
              },
              (error) => {}
            )
          }
        );
      },
      (error) => {}
    );
  }

  submitForm() {
    if (this.form.valid) {
      const newMember = new Player();
      // @ts-ignore
      newMember._id = this.member._id;
      newMember.firstName = this.form.controls['firstName'].value;
      newMember.lastName = this.form.controls['lastName'].value;
      newMember.age = this.form.controls['age'].value;
      newMember.squad = this.form.controls['squad'].value;

      this.memberService.edit(newMember).pipe(takeUntil(this.unsubscribe$)).subscribe(
        (data) => {
          this.router.navigate(['/players']);
        },
        (response) => {

        })
    } else {
      this.form.markAllAsTouched();
    }
  }

  initForm(member:Player) {
    this.form = new FormGroup({
      lastName: new FormControl(member.lastName, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(member.firstName, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(member.age),
      squad: new FormControl(member.squad, [Validators.required])
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
