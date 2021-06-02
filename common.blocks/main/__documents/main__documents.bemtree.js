block('main').elem('documents')({
    content: (
        [
            {
                tag:'input',
                attrs:{
                    type:'radio',
                    id:'tab6',
                    name:'rab-group',
                },
             },
             {   
                 elem:'tab-title',
                 tag:'label',
                 attrs:{
                     for:'tab6',
                 },
                 content:'Нормативные документы'
             },
             {  
                 elem:'tab-content',
                 tag:'section',
                 content:{
                     block:'documents'
                 }
             }
        ]
        
    )
});