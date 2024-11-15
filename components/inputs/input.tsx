const Input = (props: any) => {
  const {type = 'text'} = props;
  return <input type={type} />;
};

export default Input;
