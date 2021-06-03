block('header')({
    content: (
        [
            {
                elem:'body',
                content:[
                    {
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
                    },
                    {
                        elem:'menu',
                        cls:'container',
                        content:{
                            elem:'nav',
                            tag:'nav',
                            content:[
                                {   
                                    elem:'nav-item',
                                    elemMods:{active: 'true'},
                                    tag:'a',
                                    content:'Услуги',
                                    attrs:{
                                        href:'/'
                                    }
                                },
                                {   
                                    elem:'nav-item',
                                    tag:'a',
                                    content:'Вкладка'
                                },
                                {   
                                    elem:'nav-item',
                                    tag:'a',
                                    content:'Контакты'
                                },
                                {   
                                    elem:'nav-item',
                                    tag:'a',
                                    content:'Новости и акции'
                                },
                                {   
                                    elem:'nav-item',
                                    tag:'a',
                                    content:'Отделения'
                                },
                                {   
                                    elem:'nav-item',
                                    tag:'a',
                                    content:'Нормативные документы'
                                }
                            ]
                        }
                            
                        
                    }
                ]
            },
        ]
        
    )
});