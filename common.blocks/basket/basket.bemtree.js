block('basket')({
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
                                    elem:'content',
                                    content:[
                                        {
                                            elem:'top',
                                            content:[
                                                {
                                                    elem:'title',
                                                    tag:'h6',
                                                    content:'Корзина'
                                                },
                                                {
                                                    elem:'clear',
                                                    tag:'button',
                                                    content:['Очистить корзину ', {
                                                        elem:'clear-img',
                                                        tag:'img',
                                                        attrs:{
                                                            src:'img/basket/basket.png'
                                                        }
                                                    }]
                                                }
                                            ]
                                        },
                                        {
                                            elem:'services',
                                            content:[
                                                {   
                                                    background:'img/services/plug.png',
                                                    title:'Исследование организма ДО и ПОСЛЕ вакцинацииы',
                                                    data:'26.06.2021',
                                                    time:'15:00',
                                                    price:'2000',
                                                },
                                                {   
                                                    background:'img/header/banner.png',
                                                    title:'Исследование, просто исследование',
                                                    data:'30.008.2021',
                                                    time:'21:00',
                                                    price:'5000',
                                                },
                                                {   
                                                    background:'img/header/banner.png',
                                                    title:'Исследование, просто исследование',
                                                    data:'30.008.2021',
                                                    time:'21:00',
                                                    price:'50000',
                                                },
                                                {   
                                                    background:'img/header/banner.png',
                                                    title:'просто исследование',
                                                    data:'30.09.2021',
                                                    time:'21:00',
                                                    price:'50000',
                                                },
                                                {   
                                                    background:'img/header/banner.png',
                                                    title:'Исследование, просто исследование',
                                                    data:'30.08.2021',
                                                    time:'21:00',
                                                    price:'5000',
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                            ,
                            {
                                cls:'col-auto',
                                content:{
                                    elem:'total-col',
                                    content:{
                                        elem:'total',
                                        content:[
                                            {
                                                elem:'total-text',
                                                content:['Итого: ', {
                                                    elem:'total-text-2',
                                                    tag:'span',
                                                    content:'6000 руб'
                                                }]
                                            },
                                            {
                                                block:'modal-bs4',
                                                content:[
                                                    {   
                                                        buttonBlock:'basket',
                                                        buttonElem:'total-checkout',
                                                        buttonName:'Оформить заказ',
                                                        modalTarget:'#total-checkout',
                                                        modalId:'total-checkout',
                                                        modalContent:'reception',
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                ]
            }
        ]
        
    )
});