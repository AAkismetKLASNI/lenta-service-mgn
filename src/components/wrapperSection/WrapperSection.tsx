import { FC, ReactNode } from 'react';

interface WrapperSectionProps {
  children: ReactNode;
  id?: string;
}

export const WrapperSection: FC<WrapperSectionProps> = ({
  children,
  id = '',
}) => {
  return (
    <div id={id} className='flex flex-col gap-12 lg:gap-16 pt-16 xl:pt-40'>
      {children}
    </div>
  );
};
