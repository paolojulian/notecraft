'use client';

import SuccessFailCard from '@/components/common/success-fail-card';
import Typography from '@/components/common/typography';
import { Fragment } from 'react';
import { Note } from '../../../types/note-trainer.types';
import { PTypography, Row, Stack } from '@paolojulian.dev/design-system';
import cn from '@/utils/cn';

export default function TriadsAnswerSection({
  onNext,
  correctNotes,
  isCorrect,
}: {
  onNext: () => void;
  correctNotes: Note[];
  isCorrect: boolean;
}) {
  const answerText = isCorrect ? 'Correct!' : 'Wrong';

  return (
    <Fragment>
      <SuccessFailCard
        onClick={onNext}
        title={answerText}
        type={isCorrect ? 'success' : 'fail'}
      >
        <Stack className='gap-3'>
          <PTypography variant='body-wide'>CORRECT NOTES</PTypography>
          <Row className='gap-3'>
            {correctNotes.map((correctNote, i) => (
              <div
                key={`${correctNote}_${i}`}
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
                <PTypography
                  className={cn('uppercase', 'text-black')}
                  variant='body'
                >
                  {correctNote}
                </PTypography>
              </div>
            ))}
          </Row>
        </Stack>
      </SuccessFailCard>
      {/* <Typography className='text-center' variant={'body'}>
        "Your answer is{' '}
        <span
          className={cn({
            ['text-primary']: !isCorrect,
            ['text-green-400']: isCorrect,
          })}
        >
          {answerText}
        </span>
        "
      </Typography>
      <Stack
        className='justify-center items-center flex-1 gap-2 text-green-400 w-full'
        onClick={onNext}
      >
        <Typography variant='body-wide'>CORRECT NOTE</Typography>
        <Typography
          className={cn('uppercase', {
            ['text-primary']: !isCorrect,
            ['text-green-400']: isCorrect,
          })}
          variant='heading-lg'
        >
          {correctNotes.join('-')}
        </Typography>
      </Stack> */}
    </Fragment>
  );
}
