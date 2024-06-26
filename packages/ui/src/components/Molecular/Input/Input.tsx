import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLOR } from '@ui/styles'
import { ChangeEvent } from 'react'

export interface InputProps {
  value: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function Input({
  value, disabled = false, onChange, placeholder,
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <StyledInput
      type="text"
      disabled={disabled}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

const StyledInput = styled.input<{ disabled: Boolean }>`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.input.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font[16].size};
  outline: none;

  ${(props) => props.disabled
    && css`
      background-color: ${COLOR.gray[200]};
      color: ${COLOR.gray[900]};
      cursor: not-allowed;
      border: ${COLOR.gray[900]};
    `}
`

export default Input
