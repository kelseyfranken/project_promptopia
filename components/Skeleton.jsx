

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={"animate-pulse rounded-md bg-orange-400" + (className ? " " + className : "")}
      {...props}
    />
  )
}

export { Skeleton }
