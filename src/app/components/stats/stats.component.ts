import { Component, Output, EventEmitter, Input } from '@angular/core';
import { SpecsService } from 'src/app/specs.service';
import { Observable } from 'rxjs';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent{
  @Input() stats: any;
  chart = faChartBar;
  
  constructor(private specsService: SpecsService) {}

   ngOnInit(): void {
    
  }
 

 

}
