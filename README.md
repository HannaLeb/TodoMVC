# TodoMVC
##Skapa backend till TodoMVC med Spring boot och MySQL.
Programmet består av fem klasser, ett interface, application.properties och pom-fil, nedan kommer jag kort beskriva var och en av dem.

## Application.java
Innehåller main-metoden, härifrån startar Spring.

##Todo.java
När Todo-objekten skapas genereras ett id(Long), en text(String) och completed(Boolean) som lagras i databasen. 

##TodoApi.java
RESTful APIer som används är GET och POST, 

POST till   /todos/add : Lägger till Todos					                    	     
GET till 	/todos/all : Returnerar en lista med Todos 					    
POST till 	/todos/delete : Tar bort Todos  					                                 
GET till 	/todos/completed : Returnerar en lista med utförda Todos 			     
GET till	/todos/active : Returnerar en lista med aktiva Todos 				    
POST till	/todos/clear-completed : Tar bort utförda Todos

Exempel på Json-syntax i Postman för att lägga till Todos:
[
    { 
        "id":1, 
        "text":"Skriv inköpslista", 
        "completed":false
    }
]

##TodoController.java
Klassen innehåller @Controller-annotationen som accepterar HTTP-requests. 

##TodoService.java
Klassen tillhandahåller API:er för klienten.
TodoRepository fungerar som ett dependency i TodoService-klassen. Spring kommer att koppla upp dependenciet därför att konstruktorerna i TodoService tar instanser av Repository som parametrar. 
Genom metoderna findAll, addTodos, deleteTodo, findCompleted, findActive och clearCompleted definieras APIer som tillåter klienten att skicka id(Long), text(String) och completed(boolean) som lagras i databasen.

##TodoRepository.java
Genom APIet JPA lagras och hämtas objekt från databasen. 

##Pom.xml
Mavens konfigurationsfil, innehåller dependencies för MySQL och hibernate samt för Spring- jpa, web, thymeleaf, jdbc, aop, orm.

