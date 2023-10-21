import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { FilhoComponent } from '../filho/filho.component';

@Component({
  selector: 'app-pai',
  standalone: true,
  imports: [CommonModule, FilhoComponent, RouterModule],
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.scss'],
})
export class PaiComponent {}
