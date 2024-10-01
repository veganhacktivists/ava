import React from 'react'
import classNames from 'classnames'

interface ApplicationLogoProps {
  className?: string
}

export const ApplicationLogo: React.FC<ApplicationLogoProps> = ({
  className,
}) => {
  return (
    <img
      src="/sprites/logo.svg"
      // TODO: set or name as the alt
      alt=""
      className={classNames('inline-block', className)}
    />
  )
}
