require.config(
        {
        	baseUrl:"/js/",
        	urlArgs: "v=" +  (new Date()).getTime(),
            paths: {
                    'react': 'lib/react',//react文件
                    "JSXTransformer": 'lib/JSXTransformer',//需要用到的
                    'jsx': 'lib/jsx',//需要用到的
                    'text': 'lib/text',//需要用到的
                    'reactdom':'lib/reactdom',//react-dom
                    'browser':'lib/browser.min',//ES6转换成ES5
                    'page' :'jsx/page',//自己写的一个jsx文件
                    'page1' :'jsx/page1'

            },
            shim: {
                'react': {
                    exports: 'React'
                },
                'reactdom': {
                    exports:'reactdom'
                },
                'browser': {
                    exports:'browser'
                }
            },
            jsx: {
                fileExtension: '.jsx',
                harmony: true,
                stripTypes: true
              }
        }
    );




require(['jsx!page','jsx!page1'],function($){

});