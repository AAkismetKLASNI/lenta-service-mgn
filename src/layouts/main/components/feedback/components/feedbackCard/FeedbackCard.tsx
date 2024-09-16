import { FC } from 'react';
import starImg from '../../../../../../assets/imgs/feedback/star.svg';

interface FeedbackCardProps {
  title: string;
  text: string;
  author: string;
}

export const FeedbackCard: FC<FeedbackCardProps> = ({
  text,
  author,
  title,
}) => {
  return (
    <div className='rounded-3xl bg-gray-light p-6 flex flex-col justify-between h-[600px] md:w-[405px] md:p-8 lg:h-[700px] gap-5'>
      <div className='flex flex-col gap-4'>
        <span className='text-dec-24px font-bold'>{title}</span>
        <p>{text}</p>
      </div>
      <div className='flex justify-between items-center'>
        <span>{author}</span>
        <div className='inline-block space-x-1'>
          <img src={starImg} className='inline-block' />
          <img src={starImg} className='inline-block' />
          <img src={starImg} className='inline-block' />
          <img src={starImg} className='inline-block' />
          <img src={starImg} className='inline-block' />
        </div>
      </div>
    </div>
  );
};
