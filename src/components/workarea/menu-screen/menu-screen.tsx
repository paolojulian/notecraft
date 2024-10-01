import { PTypography, Stack } from '@paolojulian.dev/design-system';
import getAssetURL from '../../../utils/asset-map';
import Container from '../../common/container';
import SectionTitle from '../../common/section-title';
import MenuItem from './menu-item';

export default function MenuScreen() {
  return (
    <Container className='py-6 h-full'>
      <Stack className='items-center'>
        <SectionTitle title='Note Trainer' />

        <Stack className='gap-4 items-start w-full py-12'>
          <PTypography className='text-gray' variant={'body'}>
            Choose a practice method.
          </PTypography>
          <Stack className='gap-6 items-stretch w-full'>
            <MenuItem
              href='/fretboard-mastery'
              imageURL={getAssetURL('fretboard-training')}
              title='Fretboard Training'
            />
            <MenuItem
              href='/ear-training'
              imageURL={getAssetURL('ear-training')}
              title='Ear Training'
            />
            <MenuItem
              href='/triads'
              imageURL={getAssetURL('triads')}
              title='Triads'
            />
            <MenuItem
              href='/generate-random-note'
              imageURL={getAssetURL('random-note')}
              title='Random Note Generator'
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
