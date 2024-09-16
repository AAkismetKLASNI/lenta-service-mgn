import { Container, Logo } from '../../components';

export const Footer = () => {
  return (
    <footer className='py-1 xl:py-8 bg-black-almost mt-12 xl:mt-28 text-white-almost/50'>
      <Container>
        <div className='flex flex-col-reverse md:flex-row md:justify-between text-center gap-10 items-center'>
          <Logo opacity={true} />
          <span>ООО «Лента Сервис»</span>
          <address className='flex flex-col'>
            <a href='tel: +79080822392'>+7-908-082-23-92</a>
            <a href='mailto:Lenta-servis@mail.ru'>lenta-servis@mail.ru</a>
          </address>
        </div>
      </Container>
    </footer>
  );
};
