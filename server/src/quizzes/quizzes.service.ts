import { HttpException, Injectable } from '@nestjs/common';

import * as quizzes from './quizzes-db.json';
import { NotFoundError } from 'rxjs';

@Injectable()
export class QuizzesService {
  addQuiz(quiz) {
    const newQuiz = {
      ...quiz,
      questions: [],
      id: quizzes.length + 1,
    };

    quizzes.push(newQuiz);
    return newQuiz;
  }

  updateQuiz(updateQuiz) {
    const quiz = quizzes.find((quiz) => quiz.id === updateQuiz.id);
    if (quiz) return Object.assign(quiz, { ...updateQuiz });
    return new HttpException('Quiz Not Found', 404);
  }

  deleteQuiz(quizId) {
    const quizToRemove = quizzes.find((quiz) => quiz.id === quizId);
    const indexToRemove = quizzes.indexOf(quizToRemove);
    quizzes.splice(indexToRemove, 1);
    return quizToRemove;
  }

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

  toggleShuffleQuestions(quizId) {
    const quiz = quizzes.find((quiz) => quiz.id === quizId);
    quiz.shuffleQuestions = !quiz.shuffleQuestions;
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
