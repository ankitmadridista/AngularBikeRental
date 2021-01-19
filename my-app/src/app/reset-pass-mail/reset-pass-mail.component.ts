import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-pass-mail',
  templateUrl: './reset-pass-mail.component.html',
  styleUrls: ['./reset-pass-mail.component.css']
})
export class ResetPassMailComponent implements OnInit {
id: Number;
  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id']
  }

}
