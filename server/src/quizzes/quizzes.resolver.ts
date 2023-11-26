import { Resolver, Query } from '@nestjs/graphql';
import { Quiz } from './quiz.model';
import { QuizzesService } from './quizzes.service';

@Resolver()
export class QuizzesResolver {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Query((returns) => [Quiz])
  async quizzes() {
    return this.quizzesService.findAll();
  }
}
