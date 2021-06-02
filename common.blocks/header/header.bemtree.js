block('header')({
    content: (
        [
            {
                elem:'body',
                content:{
                    elem:'container',
                    cls:'container',
                    content:[
                        {   
                            elem:'left',
                            content:[
                                {
                                    elem:'title',
                                    tag:'h1',
                                    content:'Платные услуги Медцентра Якутска'
                                },
                                {
                                    elem:'discription',
                                    tag:'p',
                                    content:'ГАУ Республики Саха (Якутия) Республиканская больница №1 - Национальный центр медицины'
                                },
                                {
                                    elem:'search',
                                    tag:'input',
                                    attrs:{
                                        placeholder:'Введите название услуги'
                                    }
                                },
                                {
                                    elem:'button',
                                    tag:'button',
                                    content:'Найти'
                                }
                            ]
                        },
                        {
                            elem:'right',
                        }
                        
                    ]
                }
            },
        ]
        
    )
});