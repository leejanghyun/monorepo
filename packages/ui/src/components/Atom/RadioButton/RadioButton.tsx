import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactComponent as IcoRadioButtonOff } from '@ui/assets/images/selection_radio.svg'
import { ReactComponent as IcoRadioButtonOn } from '@ui/assets/images/selection_radio_actived.svg'
import { ReactComponent as IcoRadioButtonDisabledOn } from '@ui/assets/images/selection_radio_check_disabled.svg'
import { ReactComponent as IcoRadioButtonDisabledOff } from '@ui/assets/images/selection_radio_disabled.svg'
import { COLOR } from '@ui/styles/color'
import {
  memo,
} from 'react'

export interface RadioButtonProps {
  label?: string
  checked?: boolean
  disabled?: boolean
}

const getSvgComponent = (checked: boolean, disabled: boolean) => {
  if (checked && disabled) {
    return (
      <IcoRadioButtonDisabledOn
        width={20}
        height={20}
      />
    )
  }

  if (checked) {
    return (
      <IcoRadioButtonOn
        width={20}
        height={20}
      />
    )
  }

  if (disabled) {
    return (
      <IcoRadioButtonDisabledOff
        width={20}
        height={20}
      />
    )
  }

  return (
    <IcoRadioButtonOff
      width={20}
      height={20}
    />
  )
}

function RadioButton({
  label = '',
  disabled,
  ...rest
}: RadioButtonProps) {
  const { checked } = rest

  return (
    <RadioButtonLabel disabled={disabled}>
      <input
        {...rest}
        type="radio"
        checked={checked}
        disabled={disabled}
        data-testid="radioButton"
      />
      <CustomRadioButtonButton
        data-testid="customRadioButton"
      >
        {getSvgComponent(!!checked, !!disabled)}
      </CustomRadioButtonButton>
      {label}
    </RadioButtonLabel>
  )
}

const RadioButtonLabel = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: ${({ theme }) => theme.font[14].size};
  line-height: ${({ theme }) => theme.font[14].lineHeight};
  color: ${({ theme }) => theme.radioButton.color};
  user-select: none;
  cursor: pointer;

  ${({ disabled }) => disabled && css`
    color: ${COLOR.gray[300]};
    cursor: not-allowed;
  `}

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }
`

const CustomRadioButtonButton = styled.i`
  position: relative;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
`

export default memo(RadioButton)
