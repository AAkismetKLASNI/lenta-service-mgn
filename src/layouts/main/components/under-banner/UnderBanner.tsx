export const UnderBanner = () => {
  return (
    <div className='flex flex-col text-center justify-between mt-8 gap-8 md:flex-row md:text-left md:gap-20 xl:mt-16 xl:justify-start xl:gap-12 '>
      <div className='xl:w-[290px]'>
        <span className='text-red text-dec-h1'>{'> 11'}</span>
        <p className='text-white-almost/50'>
          Уже более чем 11 лет мы помогаем клиентам с деревообработкой
        </p>
      </div>
      <div className='xl:w-[290px]'>
        <span className='text-red text-dec-h1'>{'> 1000'}</span>
        <p className='text-white-almost/50'>
          Нам доверились не менее 1000 людей и это только начало{' '}
        </p>
      </div>
    </div>
  );
};
