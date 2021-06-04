block("basket").elem("services")(
    content()(function () {
      return this.ctx.content.map(function (item) {
          
        return [
            {
                elem:'card',
                content:[
                    
                    {
                        elem:'card-left',
                        mix:{elem:'card-img'},
                        attrs:{
                            style:"background:linear-gradient(90deg, rgba(255, 255, 255, 0) 71.87%, #FFFFFF 100%),url("+ item.background +") center center no-repeat; background-size: cover;",

                        }
                    },
                    {
                        elem:'card-right',
                        content:[
                            {
                                elem:'delete',
                                tag:'button',
                                content:{
                                    tag:'img',
                                    attrs:{
                                        src:'img/basket/x.png'
                                    }
                                }
                            },
                            {
                                elem:'card-title',
                                tag:'h6',
                                content:item.title
                            },
                            {
                                elem:'card-data',
                                content:['Дата: ', {
                                    elem:'clear-data-2',
                                    tag:'span',
                                    content:item.data
                                }]
                            },
                            {
                                elem:'card-time',
                                content:['Время ', {
                                    elem:'card-time-2',
                                    tag:'span',
                                    content:item.time
                                }]
                            },
                            {
                                elem:'card-bottom',
                                content:[
                                    {   
                                        elem:'change-button',
                                        tag:'button',
                                        content:'Изменить дату и время'
                                    },
                                    {   
                                        elem:'card-price',
                                        attrs:{
                                            href:'/card'
                                        },
                                        content:item.price+' руб'
                                    }
                                ]
                            }
                        ]
                    },
                    
                ]
            }
            
        ];
      });
    })
  );
  