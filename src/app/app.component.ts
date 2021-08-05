import { Component, Output,EventEmitter } from '@angular/core';
import { SpecsService } from 'src/app/specs.service';
import {Observable} from 'rxjs';
import {mergeMap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pctothemoon';
  stats: any


  
  constructor(private specsService: SpecsService) {}

  ngOnInit(): void {
    this.specsService.getStats().subscribe((res)=>{this.stats=res})
    }

}
