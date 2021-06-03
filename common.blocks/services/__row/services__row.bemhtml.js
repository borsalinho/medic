block("services").elem("row")(
    content()(function () {
      return this.ctx.content.map(function (item) {
        return [
            {
                elem:'col',
                cls:'col-xl-4 col-lg-6',
                content:{
                    elem:'card',
                    content:[
                        {
                            elem:'card-top',
                            attrs: {
                                style:"background:linear-gradient(180deg, rgba(255, 255, 255, 0) 51.56%, #FFFFFF 100%)," + "url(" + item.background + ") center center no-repeat; background-size: cover;",
                            },
                        },
                        {
                            elem:'card-body',
                            content:[
                                {
                                    elem:'card-title',
                                    tag:'h6',
                                    content:item.title
                                },
                                {
                                    elem:'card-discription',
                                    tag:'p',
                                    content:item.discription
                                },
                                {
                                    elem:'card-price',
                                    content:'Цена: '+ item.price +' руб'
                                },
                                {
                                    elem:'card-bottom',
                                    content:[
                                        {   
                                            elem:'button-pull',
                                            tag:'button',
                                            content:'В корзину'
                                        },
                                        {   
                                            elem:'button-more',
                                            tag:'button',
                                            content:'Подробнее'
                                        }
                                    ]
                                }
                            ]
                        }
                        
                    ]
                }
            }
            
        ];
      });
    })
  );
  