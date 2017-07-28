import { Component, OnInit } from '@angular/core';

//import { GroupStep } from '../models/group-step.model';


@Component({
  selector: 'app-group-steps-tree',
  templateUrl: './group-steps-tree.component.html',
  styleUrls: ['./group-steps-tree.component.css']
})
export class GroupStepsTreeComponent implements OnInit {

  public rootSteps: any[];

  private draggedStep:any = null;
  private draggedParentStep: any = null;

  constructor() { }



  ngOnInit() {
    // this.groupSteps = [
    //   {steps:[1,2,3]},
    //   {steps:[4,5,6]},
    //   {steps:[7,8]}
    // ]

    /**
     * Normal Step : {}
     * Grouped Step :  {childSteps:[]}
     */



    this.rootSteps = [ 
      {
        beforeAndOrId:null,
        count:0,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:5,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:0,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:0,
        withinAndOrId:null,
        selectedStepKeys:'',
        childSteps:[
          {
            beforeAndOrId:null,
            count:0,
            withinAndOrId:null,
            selectedStepKeys:''
          },
          {
            beforeAndOrId:null,
            count:0,
            withinAndOrId:null,
            selectedStepKeys:''
          }
        ]
      }
    ]
  }

  addStep() {

    let step = {
            beforeAndOrId:null,
            count:0,
            withinAndOrId:null,
            selectedStepKeys:''
          };

    this.rootSteps.push(step);


  }

  addGrupStep() {

    let groupStep = {
       beforeAndOrId:null,
       count:0,
       withinAndOrId:null,
       selectedStepKeys:'',
       childSteps:[
         {
            beforeAndOrId:null,
            count:0,
            withinAndOrId:null,
            selectedStepKeys:''
          }
       ]
    }

    this.rootSteps.push(groupStep);

  }

  getStepIndex(step,parentStep = null) {
    if(parentStep) {

      let parentStepIdx = this.rootSteps.indexOf(parentStep)

      if(parentStepIdx > - 1 ) {

        return this.rootSteps[parentStepIdx].childSteps.indexOf(step);

      }

      return -1;

    }
    return this.rootSteps.indexOf(step)
  }

  addChildStep($e,groupStep) {

    let groupStepIdx = this.getStepIndex(groupStep)

    if(groupStepIdx > - 1 ) {


      this.rootSteps[groupStepIdx].childSteps.push(

        {
            beforeAndOrId:null,
            count:0,
            withinAndOrId:null,
            selectedStepKeys:''
          }

      )
    }




  }


  removeStep($e,step) {

    console.log(step);

    let stepIdx = this.getStepIndex(step);

    if(stepIdx > - 1 ) {

      this.rootSteps.splice(stepIdx,1);

    }


  }

  removeChildStep($e,parentStep,step) {

    let parentStepIdx = this.getStepIndex(parentStep);

    let childStepIndex = this.getStepIndex(step,parentStep);

    if(parentStepIdx > -1 && childStepIndex > -1 ){

      this.rootSteps[parentStepIdx].childSteps.splice(childStepIndex,1);

      if(this.rootSteps[parentStepIdx].childSteps.length == 0) {

        // Remove group

        console.log('Hooops')

        this.rootSteps.splice(parentStepIdx,1);

      }
      else{

        console.log(this.rootSteps[parentStepIdx].childSteps.length)
      }

    }


  }


  /*** Drag and drop functionalties  */

  onDragStart($e,step,parentStep = null) {

    console.log(step);

    this.draggedStep = step;

    if(parentStep) {

      this.draggedParentStep = parentStep;
    }

  }

  

}
