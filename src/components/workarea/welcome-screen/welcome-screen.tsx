import { PTypography, Stack } from '@paolojulian.dev/design-system';
import Image from 'next/image';
import getAssetURL from '../../../utils/asset-map';
import Button from '../../common/button';
import Container from '../../common/container';
import SectionTitle from '../../common/section-title';

export default function WelcomeScreen() {
  return (
    <Container className='py-6 h-full relative bg-black'>
      <>
        <Image
          className='-z-10 pointer-events-none'
          src={getAssetURL('welcome-screen')}
          alt='welcome-screen-background'
          quality={90}
          fill
        />
        <Stack className='h-full justify-between items-center'>
          <SectionTitle title='Note Trainer' />
          <Stack className='items-center gap-2'>
            <PTypography variant={'heading-lg'}>Welcome</PTypography>
            <PTypography variant={'body'} className='text-gray'>
              Are you ready to master the fretboard?
            </PTypography>
          </Stack>
          <Button title='Get Started!' type='link' href='/menu' />
        </Stack>
      </>
    </Container>
  );
}
