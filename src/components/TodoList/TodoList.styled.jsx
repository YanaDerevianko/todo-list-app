import styled from '@emotion/styled';

export const List = styled.ul`
display: grid;
justify-content: center;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
grid-gap: 24px;
padding: 0;
margin: 0;
list-style: none;
`;
export const Item = styled.li`
position: relative;
display: flex;
align-items: center;
padding: 15px;
border: 1px solid #2a2a2a;
border-radius: 4px;
background-color: AliceBlue;
`;