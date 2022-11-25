import styled, { css } from 'styled-components';
import {
  getComponentOverride,
  spacing,
  propsBlocker,
} from '@deliveryhero/armor-system';
import { DatePickerHeadSlotPropsType } from './type';

/** 👉 ROOT ELEMENT */
export const DatePickerHeadSlotRoot = styled.div.withConfig(
  propsBlocker,
)<DatePickerHeadSlotPropsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacing(4, 5, 0, 6)};
  ${getComponentOverride('DatePickerHeadSlot')};
`;