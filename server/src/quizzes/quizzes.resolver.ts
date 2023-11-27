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
import { QuizInput } from './InputsType/quiz.input';

@Resolver((of) => Quiz)
export class QuizzesResolver {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Mutation((_) => Quiz)
  async addQuiz(@Args('quiz') quiz: QuizInput) {
    return this.quizzesService.addQuiz(quiz);
  }

  @Mutation((_) => Quiz)
  async updateQuiz(@Args('quiz') quiz: QuizInput) {
    return this.quizzesService.updateQuiz(quiz);
  }

  @Mutation((_) => Quiz)
  async toggleShuffleAnswers(
    @Args({ name: 'quizId', type: () => Int }) quizId: number,
  ) {
    return this.quizzesService.toggleShuffleAnswers(quizId);
  }

  @Mutation((_) => Quiz)
  async toggleShuffleQuestions(
    @Args({ name: 'quizId', type: () => Int }) quizId: number,
  ) {
    return this.quizzesService.toggleShuffleQuestions(quizId);
  }

  @Mutation((_) => Quiz)
  async removeQuiz(@Args({ name: 'quizId', type: () => Int }) quizId: number) {
    return this.quizzesService.deleteQuiz(quizId);
  }
  @Query((_) => [Quiz])
  async quizzes() {
    return this.quizzesService.findAll();
  }

  @ResolveField((_) => [Question])
  async questions(@Parent() quiz: Quiz) {
    const { id } = quiz;
    return this.quizzesService.questions(id);
  }

  @Mutation((_) => Question)
  async addQuestion(@Args('question') question: QuestionInput) {
    return this.quizzesService.addQuestion(question);
  }
}
