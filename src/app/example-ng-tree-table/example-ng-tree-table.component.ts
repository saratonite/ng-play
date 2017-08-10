import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-ng-tree-table',
  templateUrl: './example-ng-tree-table.component.html',
  styleUrls: ['./example-ng-tree-table.component.css']
})
export class ExampleNgTreeTableComponent implements OnInit {
  selectedItems : Array<any> = [
    {  
            "data":{  
                "name":"Andrew",
                "gender":"Male"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Andrewson",
                        "gender":"Male"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Eric",
                                "gender":"Male"
                            }
                        }                       
                    ]
                }
            ]
        }
  ];
  data =
    [  
        {  
            "data":{  
                "name":"Andrew",
                "gender":"Male"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Andrewson",
                        "gender":"Male"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Eric",
                                "gender":"Male"
                            }
                        }                       
                    ]
                }
            ]
        },
        {  
            "data":{  
                "name":"Neo",
                "gender":"Male"
            },
            "children":[
                {  
                    "data":{  
                        "name":"Trinity",
                        "gender":"Female"
                    },
                    "children":[  
                        {  
                            "data":{  
                                "name":"Link",
                                "gender":"Male"
                            }
                        }                       
                    ]
                }
            ]
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
