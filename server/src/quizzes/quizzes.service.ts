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
}
