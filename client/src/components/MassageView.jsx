import { useContext } from 'react';
import NumberContext from '../NumberContext.js';
import { StyledMassageView } from './styles/MassageView.styled';

function MassageView() {
  const { prefix, phone, massage } = useContext(NumberContext)

  return (
      <StyledMassageView>
        {`${prefix}${phone}+`}
        <br />
        {massage}
      </StyledMassageView>
  )
}

export default MassageView;
