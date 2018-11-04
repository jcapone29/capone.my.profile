import { Injectable } from '@angular/core';
import { AnchorInfo } from './anchor-info';
import { SkillSetConfig } from './skill-set-config';

@Injectable()
export class SiteConfig{
    pages: Array<AnchorInfo>;
    skillSetConfig: Array<SkillSetConfig>;
    codeLanguagesConfig: Array<SkillSetConfig>;
}