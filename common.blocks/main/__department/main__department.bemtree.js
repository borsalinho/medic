block('main').elem('department')({
    content: (
        [
            {
                tag:'input',
                attrs:{
                    type:'radio',
                    id:'tab5',
                    name:'rab-group',
                },
             },
             {   
                 elem:'tab-title',
                 tag:'label',
                 attrs:{
                     for:'tab5',
                 },
                 content:'Отделения'
             },
             {  
                 elem:'tab-content',
                 tag:'section',
                 content:{
                     block:'department'
                 }
             }
        ]
        
    )
});