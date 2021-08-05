import { Component, Input, OnInit, Output, EventEmitter,AfterViewInit } from '@angular/core';
import { SpecsService } from 'src/app/specs.service';
import {mergeMap} from 'rxjs/operators';
import { faHatWizard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hintbox',
  templateUrl: './hintbox.component.html',
  styleUrls: ['./hintbox.component.css']
})

export class HintboxComponent implements OnInit {
 currentHint: any
 hints: any
 wizardIcon = faHatWizard;

 @Output() onNewHint: EventEmitter<Object> = new EventEmitter()


  constructor(private specsService: SpecsService) { 
  
  }

  ngOnInit(): void {
  this.specsService.getHints().subscribe((res)=> this.hints = res)
  
  }
  ngDoCheck(){

    this.currentHint = this.hints[Math.floor(Math.random() * 3)] 
  }

  newHint(){
      this.currentHint = this.hints[Math.floor(Math.random() * 3)]  
    this.onNewHint.emit()
  }

}
