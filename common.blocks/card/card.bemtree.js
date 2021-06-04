block('card')({
    content: (
        [
            {   
                block:'main',
                elem:'menu',
                cls:'container',
                content:{
                    elem:'nav',
                    tag:'nav',
                    content:[
                        {   
                            elem:'nav-item',
                            tag:'a',
                            content:'Услуги',
                            attrs:{
                                href:'/'
                            }
                        },
                        {   
                            elem:'nav-item',
                            tag:'a',
                            content:'Вкладка',
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
                content:
                [
                    {
                        block:'services',
                        elem:'roads',
                        content:'Поликлиника №1›Платные услуги › Услуги'
                    },
                    {
                        elem:'body',
                        cls:'row',
                        content:[
                            {
                                cls:'col',
                                content:{
                                    elem:'content'
                                }
                            }
                            ,
                            {
                                cls:'col-auto',
                                content:[
                                    {
                                        elem:'directory',
                                        content:[
                                            {
                                                elem:'assign',
                                                content:[
                                                    {
                                                        elem:'assign-title',
                                                        tag:'h6',
                                                        content:'Назначить услугу:'
                                                    },
                                                    {
                                                        elem:'assign-body',
                                                        content:[
                                                            {
                                                                elem:'assign-choose-data',
                                                                tag:'button',
                                                                content:'Выбрать дату'
                                                            },
                                                            {
                                                                elem:'assign-data',
                                                                content:'26 мая, 2021'
                                                            },
                                                            {
                                                                elem:'assign-choose-time',
                                                                content:[
                                                                    {
                                                                        elem:'assign-time',
                                                                        content:'9:00'
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                elem:'assign-price',
                                                                tag:'span',
                                                                content:['Цена: ', {
                                                                    elem:'assign-price',
                                                                    elemMods:{color:'green'},
                                                                    tag:'span',
                                                                    content:'2000 руб'}]
                                                            },
                                                            {
                                                                elem:'assign-take',
                                                                tag:'button',
                                                                content:'В корзину'
                                                            },
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                elem:'similar-services',
                                                content:[
                                                    {
                                                        elem:'sim-ser-title',
                                                        tag:'h6',
                                                        content:'Похожие услуги:'
                                                    },
                                                    {   
                                                        block:'services',
                                                        elem:'row',
                                                        cls:'row',
                                                        content:[
                                                            {
                                                                background:'img/services/plug.png',
                                                                title:'Исследование организма ДО и ПОСЛЕ вакцинации Исследование организма ДО и ПОСЛЕ вакцинации',
                                                                discription:'Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф',
                                                                price:'2000',
                                                                pageCard:true
                                                            },
                                                            {
                                                                background:'img/services/plug.png',
                                                                title:'Исследование организма ДО и ПОСЛЕ вакцинации',
                                                                discription:'Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф Описание ывдлфыджлв фыарфыроф ыловрфырв флыоврдлфоырвфо ырвлд фрывдлорф',
                                                                price:'2000',
                                                                pageCard:true
                                                            },
                                                            {
                                                                background:'img/services/plug.png',
                                                                title:'Исследование организма ДО и ПОСЛЕ вакцинации Исследование организма ДО и ПОСЛЕ вакцинации',
                                                                discription:'Описание ывдлфыджлв',
                                                                price:'2000',
                                                                pageCard:true
                                                            }
                                                            
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
        
    )
});