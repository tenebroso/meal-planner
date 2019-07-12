const Input = ({
  type,
  onChange,
}) => (
  <div className="input-container">
    <label className="key">{type}</label>
    <input
      type="text"
      onChange={onChange}
      data-type={type}
      className="value"
    />

    <style jsx>
    {`
      .input-container {
        display: flex;
        flex-direction: column-reverse;
        margin: 10px 0;
      }
    `}
    </style>
  </div>
);

export default Input;