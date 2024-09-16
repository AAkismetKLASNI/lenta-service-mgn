import { FC } from 'react';

interface CardInterface {
  text: string;
  img: string | undefined;
}

export const Card: FC<CardInterface> = ({ text, img }) => {
  return (
    <div className='w-[470px] relative bg-gray-light py-20 px-8 rounded-3xl'>
      {img ? (
        <>
          <img src={img} className='absolute top-0 translate-y-[-50%]' />
          <p className='text-dec-24px'>{text}</p>
        </>
      ) : (
        <>
          <p className='text-dec-24px'>{text}</p>
          <a
            className='block text-center bg-red rounded-3xl border-2 border-red py-4 mt-5 hover:bg-transparent'
            href='tel: +79080822392'
            type='number'
          >
            Созвониться
          </a>
        </>
      )}
    </div>
  );
};
