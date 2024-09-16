import { TitleSection, WrapperSection } from '../../../../components';
import { Card } from './components/Card/Card';
import { cards } from './constants';

export const AboutUs = () => {
  return (
    <WrapperSection id='aboutus'>
      <TitleSection title='Почему выбирают нас' navTitle='О нас' />
      <div className='mt-8 flex flex-wrap justify-between gap-y-20'>
        {cards.map(({ img, text, id }) => (
          <Card img={img} text={text} key={id} />
        ))}
      </div>
    </WrapperSection>
  );
};
