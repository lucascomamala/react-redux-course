import classNames from "classnames"

const Panel = ({ children, className, ...rest }) => {
  const finalClasses = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )

  return (
    <div {...rest} className={finalClasses}>
      {children}
    </div>
  )
}

export default Panel
