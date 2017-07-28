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
        count:1,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:2,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:3,
        withinAndOrId:null,
        selectedStepKeys:''
      },
      {
        beforeAndOrId:null,
        count:4,
        withinAndOrId:null,
        selectedStepKeys:'',
        childSteps:[
          {
            beforeAndOrId:null,
            count:5,
            withinAndOrId:null,
            selectedStepKeys:''
          },
          {
            beforeAndOrId:null,
            count:6,
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

   // console.log(step);

    this.draggedParentStep = null;

    this.draggedStep = step;

    if(parentStep) {

      this.draggedParentStep = parentStep;
    }

  }


  onDrop($event,step,parentStep = null) {

    
    console.log('Step ---- ',step);
    console.log('Step parent --',parentStep);


      let draggedIndex = -1;
      let draggedParentIndex = -1;

      let dropedIndex = -1;
      let dropParentIndex = -1;

      if(this.draggedParentStep) {

        draggedParentIndex = this.getStepIndex(this.draggedParentStep);
        draggedIndex = this.getStepIndex(this.draggedStep,this.draggedParentStep)
      }

      else {

        draggedIndex  = this.getStepIndex(this.draggedStep);
      }

      if(parentStep) {
        
        dropedIndex= this.getStepIndex(step,parentStep);
        console.log('Drop index',dropedIndex);
        dropParentIndex = this.getStepIndex(parentStep);

      }
      else {

        dropedIndex= this.getStepIndex(step);
      }
       


      // TODO: from GROUP to global
      
      // TODO: Moving global over Group



    console.log('Draged parent step',this.draggedParentStep);

    

      if(dropParentIndex > -1) { //FIXME: From global to group and group to group
        alert('--'+dropParentIndex);

      //   if(draggedIndex > dropedIndex) {


        console.log(dropedIndex,this.rootSteps[dropParentIndex].childSteps.length)

        let currentLength = this.rootSteps[dropParentIndex].childSteps.length;
        for(let i= currentLength-1; i >= dropedIndex ; i--) {

          this.rootSteps[dropParentIndex].childSteps[i + 1] = this.rootSteps[dropParentIndex].childSteps[i];

          console.log('---------'+(i+1)+' = ',i);

          if(i>5) {
            console.log('Infinite error');
            break;

          }


        }




      this.rootSteps[dropParentIndex].childSteps[dropedIndex] = this.draggedStep;


      if(draggedParentIndex > -1) {

         this.rootSteps[draggedParentIndex].childSteps.splice(draggedIndex,1)

      }
      else {

        this.rootSteps.splice(draggedIndex,1);
      }

      
        return true;
      }
      

      /// Gobal Steps ----------------------------------------------------------

      if(draggedIndex > dropedIndex) {

        for(let i = (draggedIndex - 1) ; i >= dropedIndex ; i-- ) {
          this.rootSteps[i+1] = this.rootSteps[i];
        }

      }
      else {
        for(let i = (draggedIndex+1) ; i <= dropedIndex ; i++ ) {
          this.rootSteps[i - 1] = this.rootSteps[i];
        }
  
      }



      this.rootSteps[dropedIndex] = this.draggedStep;


    

    this.draggedParentStep = null;
    this.draggedStep = null;
  }

  

}
