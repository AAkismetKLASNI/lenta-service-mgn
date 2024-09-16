import { FC } from 'react';
import sawLogo from '../../../public/logo.svg';

interface LogoProps {
  opacity?: boolean;
}

export const Logo: FC<LogoProps> = ({ opacity = false }) => {
  return (
    <div className='flex items-center gap-2'>
      <img
        className={`w-[52px] ${opacity && 'opacity-35'}`}
        src={sawLogo}
        alt='logo'
      />
      <h2>Лента-Сервис</h2>
    </div>
  );
};
