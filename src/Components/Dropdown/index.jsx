import { useState, useEffect } from "react";
import "./index.css";

export const DropdownOne = ({
  optionList,
  optionVisbility,
  setOptionVisbility,
  id,
  selectedValue,
  onMount,
  isOpen,
}) => {
  const [options] = useState(optionList ?? []);
  const [selectedOption, setselectedOption] = useState(
    optionList.includes(selectedValue) ? selectedValue : optionList[0]
  );

  const [optVisible, setOptVisible] = useState(
    optionVisbility ?? isOpen ? [id] : []
  );

  useEffect(() => {
    onMount(selectedOption, optionList);
  }, [onMount, optionList, selectedOption]);

  const handleSelectBox = (option) => {
    setselectedOption(option);
    let filterOptionVisbility = optVisible.filter((ele) => ele !== id);
    setOptionVisbility !== undefined
      ? setOptionVisbility(filterOptionVisbility)
      : setOptVisible(filterOptionVisbility);
  };

  const handleOptionToggle = () => {
    let optVisibility = {};

    if (setOptionVisbility !== undefined) {
      let filterOptionVisbility = optionVisbility.filter((ele) => ele !== id);

      optVisibility = optionVisbility.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    } else {
      let filterOptionVisbility = optVisible.filter((ele) => ele !== id);

      optVisibility = optVisible.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    }
    setOptionVisbility !== undefined
      ? setOptionVisbility(optVisibility)
      : setOptVisible(optVisibility);
  };

  return (
    <div
      className={`select-container ${
        setOptionVisbility !== undefined
          ? optionVisbility.includes(id)
            ? "active"
            : ""
          : optVisible.includes(id)
          ? "active"
          : ""
      }`}
    >
      <div className="select" onClick={handleOptionToggle}>
        <input
          type="text"
          id="input"
          placeholder="select"
          value={selectedOption}
          disabled
        />
      </div>
      <div className="option-container">
        {options &&
          options.map((option, ind) => (
            <div key={ind} onClick={() => handleSelectBox(option)}>
              <label
                className={`option ${
                  selectedOption === option ? "activeOption" : ""
                }`}
              >
                {option}{" "}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export const DropDownTwo = ({
  optionList,
  optionVisbility,
  setOptionVisbility,
  id,
  selectedValue,
  onMount,
  isOpen,
}) => {
  const [options] = useState(optionList.optionValue ?? []);
  const [selectedOption, setselectedOption] = useState(
    optionList.optionValue.includes(optionList.selectedValue)
      ? optionList.selectedValue
      : optionList.optionValue[0]
  );

  const [optVisible, setOptVisible] = useState(
    optionVisbility ?? isOpen ? [id] : []
  );

  
  useEffect(() => {
    onMount(selectedOption, optionList);
  }, [onMount, optionList, selectedOption]);

  const handleSelectBox = (option) => {
    setselectedOption(option);
    let filterOptionVisbility = optVisible.filter((ele) => ele !== id);
    setOptionVisbility !== undefined
      ? setOptionVisbility(filterOptionVisbility)
      : setOptVisible(filterOptionVisbility);
  };

  const handleOptionToggle = () => {
    let optVisibility = {};

    if (setOptionVisbility !== undefined) {
      let filterOptionVisbility = optionVisbility.filter((ele) => ele !== id);

      optVisibility = optionVisbility.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    } else {
      let filterOptionVisbility = optVisible.filter((ele) => ele !== id);

      optVisibility = optVisible.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    }
    setOptionVisbility !== undefined
      ? setOptionVisbility(optVisibility)
      : setOptVisible(optVisibility);
  };

  return (
    <div
      className={`select-container ${
        setOptionVisbility !== undefined
          ? optionVisbility.includes(id)
            ? "active"
            : ""
          : optVisible.includes(id)
          ? "active"
          : ""
      }`}
    >
      <div className="select" onClick={handleOptionToggle}>
        <input
          type="text"
          id="input"
          placeholder="select"
          value={selectedOption}
          disabled
        />
      </div>
      <div className="option-container">
        {options &&
          options.map((option, ind) => (
            <div key={ind} onClick={() => handleSelectBox(option)}>
              <label
                className={`option ${
                  selectedOption === option ? "activeOption" : ""
                }`}
              >
                {option}{" "}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export const DropDownThree = ({
  optionList,
  optionVisbility,
  setOptionVisbility,
  id,
  selectedValue,
  onMount,
  isOpen,
}) => {
  const [options] = useState(optionList.map((option) => option.key));
  const [selectedOption, setselectedOption] = useState(
    optionList.find((option) => option.isSelected).key
  );

  const [optVisible, setOptVisible] = useState(
    optionVisbility ?? isOpen ? [id] : []
  );

  useEffect(() => {
    onMount(selectedOption, optionList);
  }, [onMount, optionList, selectedOption]);

  const handleSelectBox = (option) => {
    setselectedOption(option);
    let filterOptionVisbility = optVisible.filter((ele) => ele !== id);
    setOptionVisbility !== undefined
      ? setOptionVisbility(filterOptionVisbility)
      : setOptVisible(filterOptionVisbility);
  };

  const handleOptionToggle = () => {
    let optVisibility = {};

    if (setOptionVisbility !== undefined) {
      let filterOptionVisbility = optionVisbility.filter((ele) => ele !== id);

      optVisibility = optionVisbility.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    } else {
      let filterOptionVisbility = optVisible.filter((ele) => ele !== id);

      optVisibility = optVisible.includes(id)
        ? filterOptionVisbility
        : [`${id}`];
    }
    setOptionVisbility !== undefined
      ? setOptionVisbility(optVisibility)
      : setOptVisible(optVisibility);
  };

  return (
    <div
    className={`select-container ${
      setOptionVisbility !== undefined
        ? optionVisbility.includes(id)
          ? "active"
          : ""
        : optVisible.includes(id)
        ? "active"
        : ""
    }`}
  >
    <div className="select" onClick={handleOptionToggle}>
      <input
        type="text"
        id="input"
        placeholder="select"
        value={selectedOption}
        disabled
      />
    </div>
    <div className="option-container">
      {options &&
        options.map((option, ind) => (
          <div key={ind} onClick={() => handleSelectBox(option)}>
            <label
              className={`option ${
                selectedOption === option ? "activeOption" : ""
              }`}
            >
              {option}{" "}
            </label>
          </div>
        ))}
    </div>
  </div>
  );
};
