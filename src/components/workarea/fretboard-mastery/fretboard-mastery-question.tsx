'use client';

import { Row, Stack } from '@paolojulian.dev/design-system';
import { FretNumber, Note } from '../../../types/note-trainer.types';
import NoteChoices from '../../common/note-choices/note-choices';

export default function FretboardMasteryQuestion({
  onSelectNote,
}: {
  // eslint-disable-next-line no-unused-vars
  onSelectNote: (note: Note) => void;
  string: String;
  fretNumber: FretNumber;
}) {
  return (
    <Stack className='gap-6'>
      {/* Note Choices */}
      <Row className='justify-center'>
        <NoteChoices onSelectNote={onSelectNote} title='Select Correct Note' />
      </Row>
    </Stack>
  );
}
