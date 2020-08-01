import styled from 'styled-components'
import defaultImg from '../images/room-1.jpeg'

const StyledHero = styled.header`
margin-top: 80px;
min-height: calc(100vh - 100px);
background: url(${props => props.img}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 5px;
`;

export default StyledHero