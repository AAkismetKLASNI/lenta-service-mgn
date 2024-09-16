import { TitleSection, WrapperSection } from '../../../../components';
import { FeedbackCard } from './components/feedbackCard/FeedbackCard';
import { feedbacks } from './constants';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export const Feedback = () => {
  return (
    <WrapperSection id='feedback'>
      <TitleSection title='Что о нас думают' navTitle='Отзывы' />
      <Splide
        options={{
          type: 'loop',
          arrows: true,
          perPage: 1,
          padding: '34rem',
          gap: '50px',
          autoScroll: {
            speed: 1,
          },
          pagination: false,
          breakpoints: {
            768: {
              perPage: 1,
              arrows: false,
              pagination: true,
              padding: '0',
            },
            1024: {
              padding: '11rem',
            },
            1490: {
              padding: '19rem',
            },
          },
        }}
      >
        {feedbacks.map(({ title, text, author, id }) => {
          return (
            <SplideSlide>
              <FeedbackCard
                title={title}
                author={author}
                text={text}
                key={id}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </WrapperSection>
  );
};
