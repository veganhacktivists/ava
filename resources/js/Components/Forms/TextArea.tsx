import React, { useCallback } from 'react'
import TextareaAutosize, {
  TextareaAutosizeProps,
} from 'react-textarea-autosize'

interface TextInputProps extends TextareaAutosizeProps {
  setData: (name: string, value: any) => void
}

export const TextArea: React.FC<TextInputProps> = ({
  setData,
  onChange: customOnChange,
  ...props
}) => {
  const onChange = useCallback<React.ChangeEventHandler<HTMLTextAreaElement>>(
    (event) => {
      if (customOnChange) customOnChange(event)
      setData(event.target.name, event.target.value)
    },
    [customOnChange, setData],
  )

  return <TextareaAutosize onChange={onChange} {...props} />
}
