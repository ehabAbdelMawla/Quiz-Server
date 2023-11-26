import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Quiz } from './quiz.model';
import { QuizzesService } from './quizzes.service';
import { Question } from './models/quesion.model';

@Resolver((of) => Quiz)
export class QuizzesResolver {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Query((returns) => [Quiz])
  async quizzes() {
    return this.quizzesService.findAll();
  }

  @ResolveField((returns) => [Question])
  async questions(@Parent() quiz: Quiz) {
    const { id } = quiz;
    return this.quizzesService.questions(id);
  }
}
