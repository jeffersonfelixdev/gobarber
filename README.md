# GoBarber API

Welcome to GoBarber API

## Pre-install

Before you test this application, you need to install a postgreSQL database,
Redis and MongoDB.

## Installation

- Clone this with `git clone https://github.com/jsfelix/gobarber.git`;
- Run `yarn` to install node dependencies;
- Configure `.env` file like `.env.example`, using your own credentials;
- Run `yarn sequelize db:migrate`;
- Launch `yarn dev` to run API, and `yarn queue`, to run Bee-Queue.

## Use

### Create user

`POST http://server:port/users`

JSON body:

```json
{
  "name": "Jefferson Felix",
  "email": "jefferson@mailtest.com",
  "password": "12345678",
  "confirmPassword": "12345678"
}
```

Return:

```json
{
  "id": 1,
  "name": "Jefferson Felix",
  "email": "jefferson@mailtest.com",
  "provider": false
}
```

### Create user session

`POST http://server:port/sessions`

JSON Body:

```json
{
  "email": "jefferson@mailtest.com",
  "password": "12345678"
}
```

Return:

```json
{
  "user": {
    "id": 1,
    "name": "Jefferson Felix",
    "email": "jefferson@mailtest.com"
  },
  "token": "eyJhbGciOiKIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI69SwiaWF0IjoxNTYyNzY5OTcyLCJleHAiOjE1NjMzNzQ3NzJ9.VbQwztt1-4tIDrRROPI7tn40Fldv1edsnZCZSvBe5ew"
}
```

## Other API functions

See much more export [Insomnia_gobarber.json](https://raw.githubusercontent.com/jsfelix/gobarber/master/Insomnia_gobarber.json 'Insomnia config') to your Insomnia workspace!

## Thanks to

[Rocketseat](https://rocketseat.com.br 'Rocketseat')!
