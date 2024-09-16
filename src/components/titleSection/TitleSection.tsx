import { FC } from 'react';

interface TitleSectionProps {
  title: string;
  navTitle: string;
}

export const TitleSection: FC<TitleSectionProps> = ({ title, navTitle }) => {
  return (
    <div className='flex flex-col-reverse gap-4 md:flex-row md:justify-between items-start'>
      <span className='text-dec-h1'>{title}</span>
      <span className='py-2 px-4 border-2 border-red rounded-3xl '>
        {navTitle}
      </span>
    </div>
  );
};
