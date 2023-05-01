const DropdownFilter = ({ onChange }) => {
    const [selectedOption, setSelectedOption] = useState('Show All');
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      onChange(e.target.value);
    };
  
    return (
      <div>
        <span>Filter:</span>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Show All">Show All</option>
          <option value="Follow">Follow</option>
          <option value="Followings">Followings</option>
        </select>
        <span>Selected Option: {selectedOption}</span>
      </div>
    );
  };
  
  export default DropdownFilter;