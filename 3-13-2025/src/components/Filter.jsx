function Filter({ showInStock, setShowInStock }) {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={showInStock}
            onChange={() => setShowInStock((prev) => !prev)}
          />
          Show only in-stock items
        </label>
      </div>
    );
  }
  
  export default Filter;
  