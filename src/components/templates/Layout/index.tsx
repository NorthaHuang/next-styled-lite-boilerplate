import type { FC } from 'react';

// Components
import { Header } from '@components/organisms/Header';
import { Footer } from '@components/organisms/Footer';

// Styles
import * as S from './style';

// Types
import type { LayoutProps } from './type';

export const Layout: FC<LayoutProps> = ({ children }) => (
  <S.Wrapper>
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </S.Wrapper>
);
