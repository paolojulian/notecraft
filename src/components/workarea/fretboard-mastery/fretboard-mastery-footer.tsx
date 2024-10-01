'use client';

import { PTypography } from '@paolojulian.dev/design-system';
import { DisplayState } from './fretboard-mastery';
import Link from 'next/link';

export default function FretboardMasteryFooter({
  onNext,
  displayState,
}: {
  onNext: () => void;
  displayState: DisplayState;
}) {
  const textContainer = (text: string) => (
    <PTypography
      variant='body-wide'
      className='text-secondary uppercase py-5 w-full text-center'
    >
      {text}
    </PTypography>
  );

  if (displayState === 'answer') {
    return <button onClick={onNext}>{textContainer('Next')}</button>;
  }

  return <Link href='/note-trainer/menu'>{textContainer('Back to menu')}</Link>;
}
