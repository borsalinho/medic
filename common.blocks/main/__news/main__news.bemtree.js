block('main').elem('news')({
    content: (
        [
            {
                tag:'input',
                attrs:{
                    type:'radio',
                    id:'tab4',
                    name:'rab-group',
                },
             },
             {   
                 elem:'tab-title',
                 tag:'label',
                 attrs:{
                     for:'tab4',
                 },
                 content:'Новости и акции'
             },
             {  
                 elem:'tab-content',
                 tag:'section',
                 content:{
                     block:'news'
                 }
             }
        ]
        
    )
});