import styled from 'styled-components';
import {Text} from '../../components/UI';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
`;

export const Title = styled(Text).attrs(() => ({
  type: 'big',
  weight: 'heavy',
}))`
  color: ${props => props.theme.colors.secondary};
`;
