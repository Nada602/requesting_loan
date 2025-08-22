function InputComponent({value,handelChange,placetext,type}) {
    return (
      <>
        <label className="form-label fw-bold"></label>
        <input
          value={value}
          onChange={(e) => {
            handelChange(e.target.value);
          }}
          className="form-control"
          type={type}
          placeholder={placetext}
          required
        />
      </>
    );
}

export default InputComponent;