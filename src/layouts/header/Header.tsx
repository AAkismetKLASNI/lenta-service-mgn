import { Container, Logo } from '../../components';
import { BurgerMenu } from './components';
import { useState } from 'react';
import burgerMenu from '../../assets/imgs/burger-menu.svg';

export const Header = () => {
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  return (
    <header className='py-1 z-10 fixed top-0 left-0 right-0 bg-gray-dark xl:py-3'>
      <Container>
        <div className='flex justify-between items-center'>
          <Logo />
          <nav className='hidden lg:block space-x-10'>
            <a href='#aboutus'>О нас</a>
            <a href='#feedback'>Отзывы</a>
          </nav>
          <a className='hidden lg:block' href='tel: +79080822392'>
            +7-908-082-23-92
          </a>
          <div
            className='lg:hidden cursor-pointer'
            onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
          >
            {isOpenBurgerMenu ? (
              <div>
                <img src={burgerMenu} className='relative z-10' />
                <BurgerMenu />
              </div>
            ) : (
              <img src={burgerMenu} />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};
