##This Api only work using some software like Insomnia Postman.
I will use Insomnia for the example below##

###You will need to create some Requests in Insomnia###

![Image](https://i.imgur.com/BbvB4Jo.png)

obs: The Schema User only have password as required attribute

the base url is: http://localhost:3333/
the url are:

![Image](https://i.imgur.com/jdxCXde.png)

##The first Request you will create must be the create request
because when you create a user the response will return a token variable, this token you will have to set in the Header Authorization of the http request. The others Request will don't work without the header authorization is set##

copy the Object json below and put inside the body request of create request

```
{
	"name": "lucifer",
	"age": 2000,
	"password": "new-secret",
	"email": "gg@gmail.com"
}
´´´


**be aware that delete and find request don't have body**
```
