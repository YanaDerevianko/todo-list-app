import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;
export const Button = styled.button`
  background-color: #585858;
  position: absolute;
  right: 100px;
  border-radius: 5px;
  padding: 7px 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const ButtonDel = styled.button`
  background-color: #585858;
  position: absolute;
  right: 15px;
  border-radius: 5px;
  padding: 7px 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const ButtonSave = styled.button`
  background-color: #585858;
  position: absolute;
  right: -92px;
  border-radius: 5px;
  padding: 7px 14px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const CheckBox = styled.input`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 4px;
  background-color: #cccdde;
  width: 530px;
`;
export const TextTodo = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 24px;
  margin-left: 24px;
`;
export const Area = styled.textarea`
  width: 420px;
`;
