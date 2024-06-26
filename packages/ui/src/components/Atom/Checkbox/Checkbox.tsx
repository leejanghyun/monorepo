import styled from '@emotion/styled'
import { ReactComponent as IcoCheckboxOff } from '@ui/assets/images/selection_check_box.svg'
import { ReactComponent as IcoCheckboxOn } from '@ui/assets/images/selection_check_box_actived.svg'
import { ReactComponent as IcoCheckboxOnDisabled } from '@ui/assets/images/selection_check_box_check_disabled.svg'
import { ReactComponent as IcoCheckboxOffDisabled } from '@ui/assets/images/selection_check_box_disabled.svg'
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  ReactNode,
} from 'react'

type CheckboxSize = 'medium' | 'small'

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  sizeType?: CheckboxSize
  label?: string | ReactNode
  gap?: string
}

const getSvgComponent = (checked: boolean, disabled: boolean) => {
  if (checked && disabled) {
    return (
      <IcoCheckboxOnDisabled
        width={20}
        height={20}
      />
    )
  }

  if (checked) {
    return (
      <IcoCheckboxOn
        width={20}
        height={20}
      />
    )
  }

  if (disabled) {
    return (
      <IcoCheckboxOffDisabled
        width={20}
        height={20}
      />
    )
  }

  return (
    <IcoCheckboxOff
      width={20}
      height={20}
    />
  )
}

function Checkbox({
  label,
  gap = '8px',
  disabled,
  sizeType = 'small',
  ...rest
}: CheckboxProps) {
  const { checked } = rest

  return (
    <Label
      gap={gap}
      sizeType={sizeType}
      disabled={disabled}
    >
      <input
        {...rest}
        type="checkbox"
        disabled={disabled}
        data-testid="checkbox"
        checked={checked}
      />
      <CustomCheckButtonButton
        data-testid="customCheckbox"
      >
        {getSvgComponent(!!checked, !!disabled)}
      </CustomCheckButtonButton>
      {label}
    </Label>
  )
}

const Label = styled.label<{
  gap: string,
  disabled?: boolean,
  sizeType?: CheckboxSize
}>`
  display: inline-flex;
  align-items: center;
  position: relative;
  gap: ${({ gap }) => gap};
  font-size: ${({ theme }) => theme.font[14].size};
  line-height: ${({ theme }) => theme.font[14].lineHeight};
  color: ${({ theme }) => theme.checkbox.color};
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }
`

const CustomCheckButtonButton = styled.i`
  position: relative;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
`

export default memo(Checkbox)
