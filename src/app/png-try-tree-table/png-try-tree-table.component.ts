import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
@Component({
  selector: 'app-png-try-tree-table',
  templateUrl: './png-try-tree-table.component.html',
  styleUrls: ['./png-try-tree-table.component.css']
})
export class PngTryTreeTableComponent implements OnInit {

  constructor() { }

  treeData:any[] = [
    {
      label:'Front End',
      data:{
        name:'Frontend',
        description:'Frontend Technologies'
      },
      children:[
        {
          label:'Frameworks',
          data:{
            name:'Frameworks'
          },
          children: [
            {
              label:'Angular 4',
              data:{
                name:'Angular'
              }
            }
          ]
        }
      ]
    },
    {
      label:'Backend',
      data: {
        name: 'Backend ',
        description:'Backend technologies'
      },
      children: [
        {
          label: 'PHP',
          data: {
            name :'PHP',
            description:'PHP Server side language'
          },
          children: [
            {
              label:'Fw',
              data :{
                name:'Frameworks',
                description:'Frameworks' 
              },
              children: [
                {
                  label: 'laravel',
                  data: {
                    name:'Laravel',
                    description:'PHP framework'
                  }
                },
                {
                  label: 'Ci',
                  data: {
                    name:'Codeigniter',
                    description:'PHP framework'
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]

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
    this.parseData();
  }

  onNodeSelectHandler($e) {
    console.log('Selection ',$e)
  }

}
