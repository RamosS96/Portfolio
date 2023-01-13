import styled from "styled-components";
import { colors } from "../../utils/colors/colors";

export const LangBtn = styled.button`
  display: flex;
  border: 0;
  width: 40px;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-family: Fira;
  transition-duration: 100ms;
  background-color: rgba(255,255,255,.4)
  &hover {
   background-color: ${colors.lgrey};
  }
`

export const LangBox = styled.div`
  position: absolute;
  background-color: rgba(255,255,255,.4);
  right: 10px;
  top: 60px;
  display: flex;
`