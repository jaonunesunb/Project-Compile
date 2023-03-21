# API Compile

URL base:
https://compile-back.herokuapp.com/

## **Endpoints públicos**:

### **Registro de usuário: <span style="color: green;">POST</span> /register**

Esse endpoint será usado em dois contextos diferentes: para registrar devs, e para registrar empresas.

Formato do body **para registrar um novo dev**:

```
{
  "email": "nicholas@teste.com",
  "password": "senha123",
  "mainRule": "dev",
  "dev": {
    "name": null,
    "phone": null,
    "address": {
      "country": null,
      "city": null
    },
    "profile_img": null,
    "bio": null,
    "techs": [],
    "job_preferences": {
      "regime": null,
      "modality": null,
      "salary_range": {
        "min": null,
        "max": null
      }
    }
  }
}
```

Formato do body **para registrar uma nova empresa**:

```
{
  "email": "empresa@kenzie.com",
  "password": "exemplo123",
  "mainRule": "company",
  "company": {
    "id": null,
    "name": null,
    "CNPJ": null,
    "address": {
      "country": null,
      "city": null
    },
    "logo": null,
    "bio": null
  }
}
```

Quando o registro é bem sucedido, a resposta do servidor é:

```
{
  "accessToken": "fmq3rioefn10nu9b..."
  "user": {
    ...
  }
}
```

onde "user" é exatamente o mesmo objeto que foi enviado no body, com um novo atributo "id".

### **Login de usuário: <span style="color: green;">POST</span> /login**

Formato do body:

```
{
  "email": "empresa@kenzie.com",
  "password": "exemplo123"
}
```

Quando o login é bem sucedido, a resposta do servidor é:

```
{
  "accessToken": "fmq3rioefn10nu9b..."
  "user": {
    ...
  }
}
```

## **Endpoints privados (exigem token de autenticação)**:

### **Listar todos os usuários: <span style="color: purple;">GET</span> /users**

Formato da resposta:

```
[
	{
		"email": "nicholas@teste.com",
		"password": "$2a$10$rVrXLHr9cogvOSp0tydSOexsQXyAwQ0ray.aITE5GDwpC84UfPPxa",
		"mainRule": "dev",
		"dev": {
			"name": null,
			"phone": null,
			"address": {
				"country": null,
				"city": null
			},
			"profile_img": null,
			"bio": null,
			"techs": [],
			"job_preferences": {
				"regime": null,
				"modality": null,
				"salary_range": {
					"min": null,
					"max": null
				}
			}
		},
		"id": 1
	},
	{
		"email": "empresa@kenzie.com",
		"password": "$2a$10$FmKVZcc7jnl//uPNR7agPuG103TywxMOjZWjj005AFi0jkbu4nBbC",
		"mainRule": "company",
		"company": {
			"id": null,
			"name": null,
			"CNPJ": null,
			"address": {
				"country": null,
				"city": null
			},
			"logo": null,
			"bio": null
		},
		"id": 2
	}
]
```


### **Obter dados de um usuário: <span style="color: purple;">GET</span> /users/:id**

Formato da resposta:

```
{
	"email": "empresa@kenzie.com",
	"password": "$2a$10$FmKVZcc7jnl//uPNR7agPuG103TywxMOjZWjj005AFi0jkbu4nBbC",
	"mainRule": "company",
	"company": {
		"id": null,
		"name": null,
		"CNPJ": null,
		"address": {
			"country": null,
			"city": null
		},
		"logo": null,
		"bio": null
	},
	"id": 2
}
```

### **Editar usuário: <span style="color: yellow;">PATCH</span> /users/:id**

Esse endpoint será usado em dois contextos diferentes: para editar o perfil de um dev (inclusive para adicionar novas tecnologias), e para editar o perfil de uma empresa.

Formato do body **para editar o perfil de um dev**:

```
{
	"dev": {
		"name": "Nicholas",
		"phone": 12344566789,
		"address": {
			"country": null,
			"city": null
		},
		"profile_img": null,
		"bio": null,
		"techs": [
			{
				"name": "React",
				"yearsOfExperience": 1
			},
			{
				"name": "JavaScript",
				"yearsOfExperience": 1
			}
		],
		"job_preferences": {
			"regime": null,
			"modality": null,
			"salary_range": {
				"min": null,
				"max": null
			}
		}
	}
}
```

Formato do body **editar o perfil de uma empresa**:

```
{
	"company": {
		"name": null,
		"CNPJ": null,
		"address": {
			"country": null,
			"city": null
		},
		"logo": null,
		"bio": null
	}
}
```

Quando o registro é bem sucedido, o servidor responde com o novo objeto "user".

### **Excluir usuário: <span style="color: red;">DELETE</span> /users/:id**

### **Listar vagas de emprego: <span style="color: purple;">GET</span> /jobs**

Formato da resposta:

```
[
	{
		"userId": 1,
		"title": "Desenvolvedor Node",
		"regime": "PJ",
		"modality": "Remoto",
		"requirements": [
			{
				"name": "Node.js",
				"yearsOfExperience": 5
			}
		],
		"salary": 4000,
		"id": 1
	},
	{
		"userId": 1,
		"title": "Desenvolvedor Senior",
		"regime": "ambos",
		"modality": "Híbrido",
		"requirements": [
			{
				"name": "Node.js",
				"yearsOfExperience": 5
			}
		],
		"salary": 6000,
		"id": 2
	}
]
```

### **Criar vaga de emprego: <span style="color: green;">POST</span> /jobs**

Formato do body:

```
{
	"userId": 2, // id do usuário que está criando a vaga
	"title": "Desenvolvedor Node",
	"description": "Descrição da vaga",
  "regime": "PJ",
  "modality": "Remoto",
  "requirements": [
		{
			"name": "Node.js", 
			"yearsOfExperience": 5
		}
	],
  "salary": 4000, // opcional
	"candidates": []
}
```

### **Editar vaga de emprego: <span style="color: yellow;">PATCH</span> /jobs/:id**

Formato do body (exemplo):

```
{
  "regime": "CLT",
  "salary": 5000
}
```

### **Excluir vaga de emprego: <span style="color: red;">DELETE</span> /jobs/:id**

