# Peak Invest Front

## Iniciando aplicação
- Use o comando `dotnet build` para compilar o projeto
- Após a compilação use o comando `dotnet run` para inicializar a aplicação

## Rotas

`GET` /user/`:id`

Retorna um usuário pelo id

<details>
<summary>Retorno exemplo</summary>
  <pre>
    {
      "key": 1,
      "value": "João"
    }
  </pre>
</details>
<br>

`POST` /calculate

Retorna o valor total a ser pago a partir do número de parcelas e valor da parcela

Request Body:
```
value:          number
installments:   number
```

<details>
<summary>Retorno exemplo</summary>
  <pre>
    {
      "total": 315
    }
  </pre>
</details>
<br>

Desenvolvido por: [Vitor](https://www.linkedin.com/in/vitorrodrig/)

Projeto gerado em [ASP.NET](https://dotnet.microsoft.com/apps/aspnet/apis)