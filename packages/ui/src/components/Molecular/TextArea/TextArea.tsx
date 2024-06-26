import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLOR } from '@ui/styles'
import { ChangeEvent } from 'react'

export interface TextAreaProps {
  value: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  placeholder?: string;
}

function TextArea({
  value, disabled = false, onChange, placeholder,
}: TextAreaProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <StyledTextArea
      disabled={disabled}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

const StyledTextArea = styled.textarea<{ disabled: Boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.textArea.border};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.font[16].size};
  outline: none;
  resize: vertical; /* 수직 리사이즈만 허용 */

  ${(props) => props.disabled
    && css`
      background-color: ${COLOR.gray[200]};
      color: ${COLOR.gray[900]};
      cursor: not-allowed;
      border: ${COLOR.gray[900]};
    `}
`

export default TextArea
