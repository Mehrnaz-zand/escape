const Button = () => {
  const handleClick = () => {
    alert("Search functionality not implemented yet.");
  };
  return (
    <button className="button" onClick={() => {handleClick()}}>
      Search
    </button>
  );
};

export default Button;
