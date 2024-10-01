'use client';

import { PTypography, Stack } from '@paolojulian.dev/design-system';
import { Fragment } from 'react';

interface Props {
  noteTriadName?: string;
  scaleName: string;
}

export default function TriadsScreenQuestion({
  noteTriadName,
  scaleName,
}: Props) {
  return (
    <Stack className='gap-10'>
      {/* Question */}
      <PTypography className='text-white text-center' variant={'body'}>
        {!noteTriadName ? (
          'Generating Question...'
        ) : (
          <Fragment>
            What are the notes of an{' '}
            <span className='text-secondary'>{noteTriadName}</span> triad in the{' '}
            <span className='text-secondary'>{scaleName} scale</span>?
          </Fragment>
        )}
      </PTypography>
    </Stack>
  );
}
