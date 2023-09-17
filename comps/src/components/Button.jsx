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
  rounded
}) => {
  const classes = classnames('px-3 py-1.5 border text-white',{
    'border-blue-500 bg-blue-500': primary,
    'border-gray-900 bg-gray-900': secondary,
    'border-green-500 bg-green-500': success,
    'border-yellow-500 bg-yellow-500': warning,
    'border-red-500 bg-red-500': danger,
    'rounded-full': rounded,
  })

  return (
    <button className={classes}>
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
