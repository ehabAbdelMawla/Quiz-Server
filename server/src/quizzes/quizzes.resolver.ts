import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
  Int,
} from '@nestjs/graphql';
import { Quiz } from './quiz.model';
import { QuizzesService } from './quizzes.service';
import { Question } from './models/quesion.model';
import { QuestionInput } from './InputsType/question.input';

@Resolver((of) => Quiz)
export class QuizzesResolver {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Query((_) => [Quiz])
  async quizzes() {
    return this.quizzesService.findAll();
  }

  @ResolveField((_) => [Question])
  async questions(@Parent() quiz: Quiz) {
    const { id } = quiz;
    return this.quizzesService.questions(id);
  }

  @Mutation((_) => Quiz)
  async toggleShuffleAnswers(
    @Args({ name: 'quizId', type: () => Int }) quizId: number,
  ) {
    return this.quizzesService.toggleShuffleAnswers(quizId);
  }

  @Mutation((_) => Question)
  async addQuestion(@Args('question') question: QuestionInput) {
    return this.quizzesService.addQuestion(question);
  }
}
