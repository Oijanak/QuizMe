import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css',
})
export class InstructionComponent {
  qid: any;
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit() {
    this.qid = this.activeRoute.snapshot.params['qid'];
    console.log(this.qid);
  }
}
