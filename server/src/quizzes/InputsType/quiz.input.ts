import { Field, InputType, Int } from '@nestjs/graphql';
import { Question } from '../models/quesion.model';

@InputType()
export class QuizInput {
  @Field((type) => Int)
  readonly id: number;

  @Field()
  readonly title: string;

  @Field()
  readonly description: string;

  @Field()
  readonly shuffleQuestions: boolean;

  @Field()
  readonly shuffleAnswers: boolean;
}
