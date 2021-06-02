block('root')({
    replace: (node, ctx) => {
        const data = node.data = ctx.data;
        const meta = data.meta || {};
        const og = meta.og || {};

        if (ctx.context) return ctx.context;

        return {
            block: 'page',
            title: data.title,
            favicon: '/img/favicon/favicon-32x32.png',
            styles: [
                {
                    elem: 'css',
                    url: '/index.min.css'
                },
                {   
                    tag:'link',
                    attrs:{
                        rel:'stylesheet',
                        href:"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css",
                        integrity:"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l",
                        crossorigin:"anonymous"
                    }
                },
                {   
                    tag:'link',
                    attrs:{
                        rel:'stylesheet',
                        type:'text/css',
                        href:"//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
                    }
                },
            ],
            scripts: [
                {   
                    elem:'js',
                    url:'https://code.jquery.com/jquery-3.6.0.min.js'
                },
                {
                    elem:'js',
                    attrs:{
                        src:'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js',
                        integrity:'sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns',
                        crossorigin:'anonymous'
                    }
                },
                {
                    elem:'js',
                    attrs:{
                        src:"//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
                    }
                },
                {
                    elem: 'js',
                    url: '/index.min.js'
                },

            ],
            head: [
                { elem: 'meta', attrs: { name: 'description', content: meta.description } },
                { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title } },
                { elem: 'meta', attrs: { property: 'og:url', content: og.url } },
                { elem: 'meta', attrs: { property: 'og:site_name', content: og.siteName } },
                { elem: 'meta', attrs: { property: 'og:locale', content: og.locale || 'en_US' } },
                { elem: 'meta', attrs: { property: 'og:type', content: 'website' } },
                { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } }
            ],
            mods: { open: data.view }
        };
    }
});
