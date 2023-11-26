import { Injectable } from '@nestjs/common';

import * as quizzes from './quizzes-db.json';

@Injectable()
export class QuizzesService {
  findAll() {
    return quizzes;
  }

  questions(quizId) {
    const quiz = quizzes.find((quiz) => quiz.id === quizId);
    return quiz.questions;
  }

  toggleShuffleAnswers(quizId) {
    const quiz = quizzes.find((quiz) => quiz.id === quizId);
    quiz.shuffleAnswers = !quiz.shuffleAnswers;
    return quiz;
  }

  addQuestion(question) {
    const quiz = quizzes.find((quiz) => quiz.id === question.quizId);
    const newQuestion = {
      text: question.text,
      isMarkDown: question.isMarkDown,
    };

    quiz.questions.push(newQuestion);
    return newQuestion;
  }
}
