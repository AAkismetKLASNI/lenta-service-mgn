import banerImg from '../../../../assets/imgs/baner-img.png';
import underArrImg from '../../../../assets/imgs/under-arrow.svg';

export const Baner = () => {
  return (
    <div className='flex flex-col gap-8 items-center xl:flex-row xl:justify-between xl:items-start'>
      <div className='text-center flex flex-col gap-8 xl:text-left xl:w-[690px]'>
        <h1>Ленточные пилы, диски и оборудование</h1>
        <p className='text-white-almost/50'>
          Мы предлагаем индивидуальный подход к каждому клиенту и помогаем
          выбрать наиболее подходящее решение для конкретных задач.
        </p>
        <img className='mx-auto' width='px' src={underArrImg} alt='' />
      </div>
      <img
        className='w-[280px] md:w-[400px] lg:w-[490px] xl:w-[530px]'
        src={banerImg}
        alt='baner'
      />
    </div>
  );
};
