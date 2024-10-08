'use client';

import SuccessFailCard from '@/components/common/success-fail-card';
import Typography from '@/components/common/typography/typography';
import { Note } from '@/types/note-trainer.types';
import cn from '@/utils/cn';
import { Fragment } from 'react';

export default function EarTrainingResult({
  onNext,
  correctNote,
  isCorrect,
}: {
  onNext: () => void;
  correctNote: Note;
  isCorrect: boolean;
}) {
  const answerText = isCorrect ? (
    <Fragment>
      <div>You</div>
      <div>are</div>
      <div>correct</div>
    </Fragment>
  ) : (
    <Fragment>
      <div>You</div>
      <div>are</div>
      <div>wrong</div>
    </Fragment>
  );

  return (
    <Fragment>
      <SuccessFailCard
        onClick={onNext}
        title={answerText}
        type={isCorrect ? 'success' : 'fail'}
      >
        <div
          className={cn(
            'aspect-square w-16',
            'rounded-xl',
            'flex items-center justify-center',
            {
              ['bg-green']: isCorrect,
              ['bg-red']: !isCorrect,
            }
          )}
        >
          <Typography
            className={cn('text-black')}
            variant='heading-sm'
          >
            {correctNote}
          </Typography>
        </div>
      </SuccessFailCard>
    </Fragment>
  );
}
