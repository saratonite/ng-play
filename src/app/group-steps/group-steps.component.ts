import { Component, OnInit } from '@angular/core';

//import { GroupStep } from '../models/group-step.model';


@Component({
  selector: 'app-group-steps',
  templateUrl: './group-steps.component.html',
  styleUrls: ['./group-steps.component.css']
})
export class GroupStepsComponent implements OnInit {

  public groupSteps: any[];

  private dragedStep:any = null;
  private dragGroup: any = null;

  constructor() { }



  ngOnInit() {
    // this.groupSteps = [
    //   {steps:[1,2,3]},
    //   {steps:[4,5,6]},
    //   {steps:[7,8]}
    // ]
    this.groupSteps = [ 

      {steps : [{count:1,type:1},{count:2,type:2}]},
      {steps : [{count:3, type:3},{count:4,type:4}]},
      {steps : [{count:5,type:5},{count:6,type:6}]}
    ]
  }

  // https://github.com/angular/angular/issues/4402

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  addGroup($e) {

    this.groupSteps.push({steps : [{count:1,type:null}]});

  }

  /**
   * 
   * @param  Dom Event 
   * @param group 
   */
  groupAddStep ($e,group) {

    console.log('Group add step ', group);

    let groupIdx = this.groupSteps.indexOf(group)

    if( groupIdx > -1 ) {

      console.log(this.groupSteps[groupIdx].steps.push({count:1,type:null}));

      //this.groupSteps[groupIdx].setps.push('new')
    }

  }

  groupRemoveStep($event, group, step) {

    console.log(group,step);

    let groupIdx = this.groupSteps.indexOf(group)

    if( groupIdx > -1 ) {

      let stepIdx =  this.groupSteps[groupIdx].steps.indexOf(step);

      if(stepIdx > -1 ) {

        this.groupSteps[groupIdx].steps.splice(stepIdx,1);
      }

      // Remove group if no steps 
      if(this.groupSteps[groupIdx].steps.length === 0) {

        this.groupSteps.splice(groupIdx,1);

        console.log(this.groupSteps);

      }

      //this.groupSteps[groupIdx].setps.push('new')
    }

  }

  // Drag and drop functionalty
  dragStart ($e, group,step) {

    console.log('Event:dragStart ',group);
    console.log('Event:dragStart step ',step);
    this.dragGroup = group;
    
    this.dragedStep = step;
    

    
  }

  dragEnd($e) {


  }

  onDrop($event,group,step) {

    let dragedGroupIndex = this.groupSteps.indexOf(this.dragGroup);
    let dropGroupIndex = this.groupSteps.indexOf(group);

    if(!this.dragedStep) {

      // Group Drop
      console.log('Group Drag', dragedGroupIndex)
      console.log('Group Drop', dropGroupIndex)

      if(dragedGroupIndex > dropGroupIndex ) {
        console.log('CASE 1');

        for( let i = (dragedGroupIndex -1) ; i >= dropGroupIndex   ; i--) {
            this.groupSteps[i+1] = this.groupSteps[i];
          }
      }
      else {

        console.log('CASE 2')

        for( let i = (dragedGroupIndex + 1) ; i <= dropGroupIndex   ; i++) {
            this.groupSteps[i-1] = this.groupSteps[i];
          }
      }

      this.groupSteps[dropGroupIndex] = this.dragGroup;


      return ;

    }

    

    

     let steps = this.groupSteps[dragedGroupIndex].steps;

     let draggedStepIndex = steps.indexOf(this.dragedStep);

    if(dragedGroupIndex === dropGroupIndex && dropGroupIndex > -1) {
      // If drag inside same group
       
        let droppedStepIndex = steps.indexOf(step);


        if ( draggedStepIndex > droppedStepIndex ) {

          for( let i = (draggedStepIndex -1) ; i >= droppedStepIndex   ; i--) {
            steps[i + 1] = steps[i];
          }

          
          
        }
      else if  ( draggedStepIndex < droppedStepIndex ){

        for( let i = (draggedStepIndex +1 ) ; i <= droppedStepIndex   ; i++) {
            steps[i - 1] = steps[i];
          }
      }

      this.groupSteps[dragedGroupIndex].steps[droppedStepIndex] = this.dragedStep;

    }

    else {

      //  diffrent group
      console.log('Diffrent group ');

      console.log(this.groupSteps[dragedGroupIndex].steps.splice(draggedStepIndex,1));

      //this.groupSteps[dropGroupIndex].steps.push(this.dragedStep);
      
      

      let droppedStepIndex = this.groupSteps[dropGroupIndex].steps.indexOf(step);

      console.log('Droped step index '+droppedStepIndex,' Len'+ this.groupSteps[dropGroupIndex].steps.length);

      for(let i = this.groupSteps[dropGroupIndex].steps.length-1; i >= droppedStepIndex ; i--) {

        console.log('** ',i);

        this.groupSteps[dropGroupIndex].steps[i +1 ] = this.groupSteps[dropGroupIndex].steps[i]

      }

     this.groupSteps[dropGroupIndex].steps[droppedStepIndex] = this.dragedStep;

     if (this.groupSteps[dragedGroupIndex].steps.length == 0 ) {

      this.groupSteps.splice(dragedGroupIndex,1);
     }
      

    }


  }

}
