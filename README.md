
# GraphQL Quiz CRUD Example

![img-removebg-preview](https://github.com/ehabAbdelMawla/Quiz-Server/assets/51888513/c6d5e5d7-f5c0-4e2e-9de3-d049ca39d2cf)


This is a simple example of a CRUD (Create, Read, Update, Delete) quizzes application using GraphQL. The application stores quiz data in a JSON file and allows for basic operations through GraphQL queries and mutations.



## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/ehabAbdelMawla/Quiz-Server.git
cd Quiz-Server
```

2. Clone the Repository:

```bash
npm install
```

3. Start the Application:

```bash
npm start
```
The GraphQL server will be accessible at http://localhost:3000/graphql.



## GraphQL Operations

1. Query All Quizzes
```graphql
query Quizzes {
    quizzes {
        description
        shuffleQuestions
        shuffleAnswers
        questions {
            text
            isMarkDown
        }
        id
        title
    }
}

```

1. Query All Quizzes
```graphql
query Quizzes {
    quizzes {
        description
        shuffleQuestions
        shuffleAnswers
        questions {
            text
            isMarkDown
        }
        id
        title
    }
}

```
2. Add Quiz
```graphql
mutation AddQuestion {
    addQuiz(
        quiz: {id: 10, title: "title", description: "description", shuffleQuestions: true, shuffleAnswers: true}
    ) {
        title
        description
        shuffleQuestions
        shuffleAnswers
        id
    }
}

```
3. Update Quiz
```graphql
mutation UpdateQuiz {
    updateQuiz(
        quiz: {id: 1, title: "Updated Title", description: "Updated Discription", shuffleQuestions: false, shuffleAnswers: false}
    ) {
        id
        title
        description
        shuffleQuestions
        shuffleAnswers
    }
}


```
4. Toggle Quiz Shuffle Answers
```graphql
mutation ToggleShuffleAnswers {
    toggleShuffleAnswers(quizId: 3) {
        id
        title
        description
        shuffleQuestions
        shuffleAnswers
    }
}


```
5. Toggle Quiz Shuffle Question
```graphql
mutation ToggleShuffleAnswers {
    toggleShuffleQuestions(quizId: 1) {
        id
        title
        description
        shuffleQuestions
        shuffleAnswers
    }
}


```
6. Remove Quiz
```graphql
mutation AddQuestion {
    addQuiz(
        quiz: {id: 10, title: "title", description: "description", shuffleQuestions: true, shuffleAnswers: true}
    ) {
        title
        description
        shuffleQuestions
        shuffleAnswers
        id
    }
}


```

 <!-- CONTACT -->
## Contact
<p align="center">
<a  href="mailto:eabdo1474@gmail.com">
 <img src="https://user-images.githubusercontent.com/51888513/188922645-da22d955-0b02-46d9-8145-564b54316d87.png" width="50"/> 
</a>
<a href="https://www.youtube.com/channel/UCnoe7bD7w2fWYlNzqY3qjLA">
<img src="https://user-images.githubusercontent.com/51888513/188924271-4554ab67-60b6-46db-9d38-b5d284bfc324.png" width="50"/>
</a>
<a href="https://www.linkedin.com/in/ehab-abdel-mawla-9b20aa183">
<img src="https://user-images.githubusercontent.com/51888513/188924356-4578aa1f-26c0-4310-a16d-f4eb3c891b8d.png" width="50"/>
</a>
<a href="https://codepen.io/ehabAbdelMola"><img src="https://user-images.githubusercontent.com/51888513/188924374-5169b372-1eda-4639-95b7-ceacbe31b861.png"   width="50"/> </a>
<a href="https://www.instagram.com/abdoehab4551/"><img src="https://user-images.githubusercontent.com/51888513/188924858-1b4bd316-4259-4f22-be15-0872c31ebc12.png"   width="50"/> </a>

</p>

