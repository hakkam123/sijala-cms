function Card(props) {
  const { variant, extra, children, ...rest } = props;
  return (
    <div
      className={`!z-5 relative flex flex-col rounded-xl bg-white bg-clip-border border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 dark:!bg-navy-800 dark:text-white dark:border-navy-700 dark:shadow-none ${extra}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
