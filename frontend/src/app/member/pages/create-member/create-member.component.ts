import {Component,  OnDestroy, OnInit} from '@angular/core';
import { Subject} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Location} from '@angular/common';
import {Player} from "../../../_models/Player";
import { PlayerServiceHttp } from "../../../_services/player.service";
import {Team} from "../../../_models/Team";
import {TeamsService} from "../../../_services/teams.service";

@Component({
  templateUrl: 'create-member.component.html',
  styleUrls: ['create-member.component.scss']
})
export class CreateMemberComponent implements OnInit, OnDestroy {
  form! : FormGroup;
  teams: Team[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private memberService: PlayerServiceHttp,
              private readonly location: Location,
              private readonly teamService : TeamsService,
              ) {
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit() {
    this.initForm();
  }

  submitForm() {
    if (this.form.valid) {
      const newMember = new Player();
      newMember.firstName = this.form.controls['firstName'].value;
      newMember.lastName = this.form.controls['lastName'].value;
      newMember.age = this.form.controls['age'].value;
      newMember.squad = this.form.controls['squad'].value;
      this.memberService.create(newMember).pipe(takeUntil(this.unsubscribe$)).subscribe(
          () => {
            this.router.navigate(['/players']);
          },
          (error: any) => {}
        )
      }
  }

  initForm() {
    this.form = new FormGroup({
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      age: new FormControl(null, [Validators.required]),
      squad: new FormControl(null, [Validators.required])
    });

    this.teamService.getAllTeams().pipe(takeUntil(this.unsubscribe$)).subscribe(
      (data) => {this.teams = data;},
      (error) => {}
    )
  }

  back() {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      this.router.navigate(['/players']);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
