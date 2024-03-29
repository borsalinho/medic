block('main')({
    content: (
        [
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
            },
            {
                cls:'container',
                content:{
                    block:'services'
                }
            }
        ]
        
    )
});