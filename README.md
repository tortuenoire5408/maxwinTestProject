# maxwinTestProject

node : Node.js是另外一種上下文，它允許在後端（脫離瀏覽器環境）運行JavaScript程式碼，是一個可以跑 javascript 程式碼的環境。
npm : node.js package management，Node模組套件管理和安裝，例如:
    專案：npm install <package name> --save-dev (儲存於專案目錄下)
    全域：npm install <package name> -g (global，存儲於本機之下)
expressjs : Express是目前最穩定、使用最廣泛開發框架，Express除了為HTTP模組提供了更高階的接口外，還實現了許多功能，其中包含：
            路由控制、模板解析支持、動態視圖、用戶會話、CSRF保護、靜態文件服務、錯誤控制器、訪問日誌、緩存、插件支持。
webpack : Webpack與其他前端打包工具(watchify、Browserify)定位不太同，它是一個模組(module)系統，透過這些豐富的模組來實現更多的功能，它有：
            1.將CSS、圖片與其他資源打包至一個.js之中。
            2.打包之前預處理(less、coffeescript、jsx等)。
            3.依entry文件不同，把.js折分為多個.js
            4.豐富的模組元件。
commonjs : CommonJS是一種規範，NodeJS是這種規範的實現。

JavaScript程式碼越來越龐大，webpack提供模組化系統，分析整個專案結構，找到JavaScript和一些瀏覽器不能直接執行的拓展語言(Scss，TypeScript等)，將其打包成適合的格式供瀏覽器使用
webpack原生只能處理JavaScript，loader可將其他程式碼轉換成JavaScript，如此一來便能將不同程式碼組合成同一模組

project 設計:
1.Cloud9 原本就安裝了node => node -v => v4.6.1
                     npm => npm -v => 2.15.9
2.首先在專案目錄下 => npm init =>建立package.json

    "dependencies": {
        "express": "^4.14.0"
      }
    
    => npm install => 在專案目錄下，自動產生node_modules資料夾，並安裝好express
    
3.因為在此專案還需使用到CSS,JSON,webpack，所以另外下了以下指令:
    npm install css-loader style-loader --save-dev
    npm install json-loader --save-dev
    npm install webpack --save-dev
    
    => package.json 自動增加
    
    "devDependencies": {
    "css-loader": "^0.26.1",
    "json-loader": "^0.5.4",
    "style-loader": "^0.13.1",
    "webpack": "^1.14.0"
    }

4.在專案目錄下建立server.js，
    express.static => 在 Express 中提供靜態檔案(將含有靜態資產的目錄名稱傳遞給 express.static 中介軟體函數)
    回應物件 (res) 中的方法可以傳送回應給用戶端，res.sendFile => 以八位元組串流形式傳送檔案。

5.建立app資料夾，在app資料夾下建立webpack.config.js
    將 index.js , getData.js , getData2.js , getClock.js 合併成bundle.js
    
    entry:  ['./index.js', './getData.js', './getData2.js', './getClock.js'],
    output: {
     filename: 'bundle.js'
    },
    
    使用到CSS , JSON => loader
    
    loaders: 
        [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json/, loader: "json-loader" }
        ]
        
    resolve,副檔名可以省略
    
    resolve: {
    extensions: ['', '.js', '.css', '.json']
    }

6.將原本的getData.js , getData2.js , getClock.js依照CommonJS規範模組化function載入到index.js使用