# wek
Desafio utilizando Angular.

Primeiramente, você precisará instalar o bootstrap e o jquery, para carregar a estilização da aplicação.

Após clonar o repositório, rode o seguinte comandos do npm:

    npm install bootstrap@4.1.3 jquery@3.3.1 ngx-toastr@14.3.0 --save

Após, abra o arquivo angular.json e substitua as propriedades "styles" e "scripts" para os valores abaixo (para adicionar os arquivos corretamente no projeto):

    "styles": [
        "node_modules/ngx-toastr/toastr.css",
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "src/styles.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/popper.js/dist/umd/popper.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
    ]

Após isso, rode os seguintes comandos sucessivamente:

    npm i
    ng s -o