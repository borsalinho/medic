block('reception')({
    content: () => [
        {
            elem:'body',
            content:[
                {
                    elem:'title',
                    tag:'h6',
                    content:'Записаться на прием'
                },
                {
                    elem:'fio',
                    tag:'input',
                    attrs:{
                        placeholder:'ФИО'
                    }
                },
                {
                    elem:'number',
                    tag:'input',
                    attrs:{
                        placeholder:'Телефон'
                    }
                },
                {
                    elem:'e-mail',
                    tag:'input',
                    attrs:{
                        placeholder:'Электронная почта'
                    }
                },
                {
                    elem:'familiarization',
                    content:[
                        {
                            tag:'input',
                            attrs:{
                                type:'checkbox'
                            }
                        },
                        {
                            tag:'span',
                            content:'Я ознакомлен и согласен с «Условиями сбора и обработки персональных данных»'
                        }
                        
                    ]
                },
                {
                    elem:'bottom',
                    cls:'row',
                    content:[
                        {
                            cls:'col-md d-flex align-items-center',
                            content:{
                                elem:'price',
                                content:['Стоимость услуги: ', {
                                    elem:'price-2',
                                    tag:'span',
                                    content:'6000 руб'
                                }]
                            }
                        },
                        {
                            cls:'col-md-auto mt-4 mt-md-0 d-flex justify-content-center',
                            content:{
                                elem:'button',
                                tag:'button',
                                content:'Записаться к врачу'
                            }
                        },
                    ]
                }
            ]
        }
        
    ]
});