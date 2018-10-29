import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../shared/services/app-config.service';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent implements OnInit {

  constructor(public appConfigSvc: AppConfigService) { 

  }

  ngOnInit() {

  }

  onAppear() {
    console.log('test');
  }

}
