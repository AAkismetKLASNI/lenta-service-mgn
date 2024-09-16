export const BurgerMenu = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black-almost opacity-90'>
      <ul className='flex flex-col gap-4 items-center justify-center h-full'>
        <a href='#aboutus' className='text-dec-h2'>
          О нас
        </a>
        <a href='#feedback' className='text-dec-h2'>
          Отзывы
        </a>
        <a className='mt-5 underline' href='tel: +79080822392'>
          +7-908-082-23-92
        </a>
      </ul>
    </div>
  );
};
