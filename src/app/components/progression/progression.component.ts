import { Component, OnInit,Input,EventEmitter,AfterViewInit } from '@angular/core';
import { SpecsService } from 'src/app/specs.service';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.css']
})
export class ProgressionComponent {
  @Input() stats: any;
  oldStats: any;
  posted: boolean = false;
  constructor(private specsService: SpecsService) { }

  ngOnInit(): void {
    this.specsService.getProgress().subscribe((res)=>{this.oldStats = res})
    }

    ngAfterContentInit(){
      if(this.posted == false){
      this.specsService.postUpdates(this.stats).subscribe()
      }
      this.posted = true
    }
}
