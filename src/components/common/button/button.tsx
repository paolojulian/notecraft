import cn from '@/utils/cn';
import { PTypography } from '@paolojulian.dev/design-system';
import Link from 'next/link';

interface ButtonBaseProps {
  title: string;
}

interface ButtonProps extends ButtonBaseProps {
  type: 'button';
  href?: never;
}

interface ButtonLinkProps extends ButtonBaseProps {
  type: 'link';
  href: string;
}

export default function Button({
  title,
  type,
  href,
}: ButtonProps | ButtonLinkProps) {
  const className = cn(
    'flex items-center justify-center w-full bg-primary rounded-lg py-6',
    'duration-500 active:scale-90 active:bg-primary/75 ease-in-out'
  );

  if (type === 'link') {
    return (
      <Link href={href} className={className}>
        <PTypography variant={'body'} className='text-white'>
          {title}
        </PTypography>
      </Link>
    );
  }

  return (
    <button className={className}>
      <PTypography variant={'body'} className='text-white'>
        {title}
      </PTypography>
    </button>
  );
}
