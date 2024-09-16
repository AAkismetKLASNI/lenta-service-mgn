import { Container } from '../../components';
import { AboutUs, Baner, UnderBanner, Feedback } from './components';

export const Main = () => {
  return (
    <main className='mt-28 md:mt-40 lg:mt-52 xl:mt-60'>
      <Container>
        <Baner />
        <UnderBanner />
        <AboutUs />
        <Feedback />
      </Container>
    </main>
  );
};
