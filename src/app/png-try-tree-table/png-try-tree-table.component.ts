import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

import productsTree from '../models/products'

@Component({
  selector: 'app-png-try-tree-table',
  templateUrl: './png-try-tree-table.component.html',
  styleUrls: ['./png-try-tree-table.component.css']
})
export class PngTryTreeTableComponent implements OnInit {

  private selectedNodes : Array<any> = [];


  // Autocomplete 

  private searchText : string = '';

  private results : Array<any> = [];

  constructor() { }

  search($e) {

    console.log('auto complete ', this.results)

    this.results = ['Apple','Bat','Cat','Dog']

    this.results = this.treeData.filter(data=>{
      console.log('Search',data)
      console.info(data.data.name.toLowerCase().indexOf(this.searchText))
      if(data.data.name.toLowerCase().indexOf(this.searchText) > -1) {
        return data
      }
    }).map(data=> data.data.name)

  }

  treeData = [];
  rowData:any[] = [
    {
      name:'A',
      children: [
        {
          name:'BB',
          children:[
            {
              name:'CCC',
              children: [
                {
                  name:'EEEE'
                }
              ]
            },
            {
              name:'DDD'
            }
          ]
        }
      ]
    },
    {
      name:'1',
      children:[
        {
          name:'22',
          children: [
            {
              name: '333'
            }
          ]
        }
      ]
    }
  ]

  parseData() {

    let newdata =this.rowData.map((data1) => {

      let children1 = [];
      if(data1.children && data1.children.length) {

         children1 = data1.children.map((data2) => {

          let children2 = [];
          
          if(data2.children && data2.children.length ) {

            children2 = data2.children.map((data3) => {

                let children3 = []
                
                if(data3.children && data3.children.length) {

                  children3 = data3.children.map(data4=>{

                    return {
                      label: data4.name,
                      data:{
                        name:data4.name
                      }

                    }
                  })
                }

              return {
                label: data3.name,
                data: {
                  name:data3.name
                },
                children:children3
              }

            });

          }

          return {
            label: data2.name,
            data: {
              name: data2.name,
            },
            children:children2
          }

        })
      } 
      ///

      return{
        label:data1.name,
        data: {
          name:data1.name
        },
        children:children1

      }

    });

    console.log('NEW DATA ',newdata);

    this.treeData = newdata;


  }




  ngOnInit() {

    console.log(this.treeData);
    //this.parseData();

    console.log(productsTree);

    this.selectedNodes = [
      {
        label : 'Drug1',
        data:{
          name:'Drug1',
          drugId:1
        }
      }
    ]

    /** */

    let productTreeNodes = this.parseProductsToTreeNode();

    console.log('new formated products tree' , productTreeNodes)

    // this.treeData = [
    //   {
    //     label:'Hello',
    //     data: {
    //       name :'Hello'
    //     },
    //     children: [
    //       {
    //         label: 'World',
    //         data :{
    //           name: 'World'
    //         }
    //       }
    //     ]
    //   }
    // ];

    this.treeData = this.parseProductsToTreeNode();
  }

  // Parse  Products to TreeNode;
  parseProductsToTreeNode() {

      // Root level iteration

      return productsTree.map(rootNode=> {
        let childBrands = [];
        // Level 2 iteration
        if( rootNode.brand && rootNode.brand.length ) {
          rootNode.brand.forEach(brandNode => {
            let childRoutedDoses = [];
            // Level 3
            if( brandNode.routedDose && brandNode.routedDose.length ) {

              brandNode.routedDose.forEach(routedDoseNode =>{
                // routedDose
                 // Level 4 
                 let childMeds = []
                 if(routedDoseNode.med && routedDoseNode.med.length ) {

                   routedDoseNode.med.forEach(medNode=> {

                     let medObj = {
                       label:medNode.med,
                       data:{
                         name:medNode.med
                       }
                     }
                     childMeds.push(medObj)
                   })

                 }
                let routedDoseObj = {
                  label:routedDoseNode.routedDose,
                  data :{
                    name:routedDoseNode.routedDose
                  },
                  children:childMeds
                }
                childRoutedDoses.push(routedDoseObj);
              })

            }
            let brandChildObj = {
              label: brandNode.brand,
              data:{
                name:brandNode.brand
              },
              children:childRoutedDoses
            }

            childBrands.push(brandChildObj);
          });
        }

        let rootObj = {
          label:rootNode.name,
          data:{
            name: rootNode.name,
            drugId: rootNode.drugId
          },
          children:childBrands
        }

        return rootObj;

      })
  }

  parseTreeNodeToProducts() {

    console.log('Selected nodes',this.selectedNodes);

    let selectedRootNodes = this.selectedNodes.filter(selectedItem => {
      if(selectedItem.data && selectedItem.data.drugId) {
        return selectedItem;
      }
    })

    console.log('SELECTED Filter items', [...selectedRootNodes])


  }

  onNodeSelectHandler($e) {
    console.log('Selection ',$e)
    console.log('-------->',this.selectedNodes);
  }

}
