import React, { Children } from 'react'
import classnames from 'classnames'

export enum ButtonSize {
	Large = 'lg',
	Small = 'sm',
}

export enum ButtonType {
	Primary = 'primary',
	Default = 'default',
	Danger = 'danger',
	Link = 'link',
}

interface BaseButtonProps {
	className?: string
	disabled?: boolean
	size?: ButtonSize
	btnType?: ButtonType
  href?: string
	children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
	const { btnType = ButtonType.Default, disabled = false, size, children, href } = props
  
  // 合并类名 btn btn-lg, btn-primary
  const classes = classnames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })

  if(btnType === ButtonType.Link) {
    return (
      <a 
        className={classes}
      href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <Button
      className={classes}
      disabled={disabled}
      >
        {children}
      </Button>
    )
  }
}

export default Button
