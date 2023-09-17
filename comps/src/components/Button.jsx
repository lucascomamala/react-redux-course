import PropTypes from 'prop-types'

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
  return (
    <button className='px-3 py-1.5 border border-blue-600 bg-blue-500 text-white'>
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
