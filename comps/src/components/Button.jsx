import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classnames(rest.className, 'flex items-center px-3 py-1.5 border',{
    'border-blue-500 bg-blue-500': primary,
    'border-gray-900 bg-gray-900': secondary,
    'border-green-500 bg-green-500': success,
    'border-yellow-500 bg-yellow-500': warning,
    'border-red-500 bg-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-white': !outline,
    'text-black': !primary && !secondary && !success && !warning && !danger,
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,
  })

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  chechVariation: ({primary, secondary, success, warning, danger }) => {
    const count = [primary, secondary, success, warning, danger].filter(Boolean).length
    if (count > 1) return new Error('Only one variation should be present')
  }
}

export default Button
