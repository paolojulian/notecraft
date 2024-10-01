import { PTypography } from '@paolojulian.dev/design-system';

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <PTypography className='text-gray uppercase mt-6' variant={'body-wide'}>
      {title}
    </PTypography>
  );
}
