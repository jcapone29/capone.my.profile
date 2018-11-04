import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../shared/services/app-config.service';


@Component({
  selector: 'app-code-languages',
  templateUrl: './code-languages.component.html',
  styleUrls: ['./code-languages.component.scss']
})
export class CodeLanguagesComponent implements OnInit {

  constructor(public appConfigSvc: AppConfigService) { }

  ngOnInit() {
  }

}
