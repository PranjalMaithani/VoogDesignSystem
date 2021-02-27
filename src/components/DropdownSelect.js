import SVGIcon from "./SVGs/SVGIcon";
import { DropdownArrowSVG, TickSVG } from "./SVGs/svgs";
import styled from "styled-components";

import { primary, grey } from "../design/colors";
import cornerRadius from "../design/cornerRadius";
import SetTypography from "./SetTypography";
import typeScale from "../design/typeScale";
import spacing from "../design/spacing";
import curves from "../design/animation";
import shadows from "../design/shadows";
import PropTypes from "prop-types";
import hiddenStyle from "./HiddenStyle";

import { useState, useRef, useEffect, useCallback } from "react";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  outline: none;
  opacity: ${(props) => (props.isDisabled ? 0.5 : 1)};
`;

const OptionsDiv = styled.ul`
  list-style: none;
  width: 296px;
  position: absolute;
  top: 50px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  margin: 0;
  padding: 0;
  box-shadow: ${shadows["1"]};
`;

const Option = styled.li`
  margin: 0;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small}px;
  ${SetTypography(typeScale.p14)}
  background-color: ${primary.white};
  color: ${(props) => (props.isChecked ? primary.voogBlue : primary.black)};

  &:hover,
  &:focus {
    background-color: ${primary.voogBlueLight};
    color: ${primary.voogBlue};
  }
`;

const SelectHeader = styled.label`
  display: inline-block;
  position: absolute;
  overflow: visible;
  margin: 0;

  background-color: ${primary.white};
  top: -${spacing.extraSmall}px;
  bottom: 0;
  left: ${spacing.extraSmall}px;
  ${SetTypography(typeScale.l12Bold)}
  height: 16px;
  padding: 0 4px;
  color: ${primary.primaryGrey};
`;

const HiddenSelect = styled.select`
  display: none;
`;

const Select = styled.label`
  margin: 0;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 296px;
  height: 48px;
  padding: ${spacing.smallExtra}px ${spacing.small}px;
  color: ${(props) => (props.isOpen ? primary.voogBlue : primary.primaryGrey)};
  background-color: ${primary.white};
  border: 1px solid ${(props) => (props.isOpen ? primary.voogBlue : grey.g3)};
  border-radius: ${cornerRadius.small}px;

  transition: 0.1s;
  animation-timing-function: ${curves.outFast};

  &:hover {
    border-color: ${(props) => (props.isOpen ? primary.voogBlue : grey.g2)};
  }

  &:focus {
    border-color: ${(props) => (props.isOpen ? primary.voogBlue : grey.g2)};
  }

  &:disabled {
    pointer-events: none;
  }

  > label {
    color: ${(props) =>
      props.isOpen ? primary.voogBlue : primary.primaryGrey};
  }

  > span {
    color: ${primary.primaryGrey};
  }
`;

const SelectText = styled.input`
  margin: 0;
  border: none;
  outline: none;
  ${SetTypography(typeScale.p14)}
  overflow-x: auto;
  max-height: 25px;
  width: 100%;
`;

const Icon = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 6px;
  background-color: ${primary.white};
`;

//SELECT OPTIONS
const OptionComponent = ({ option, index, onOptionSelect, isChecked }) => {
  const keyboardNavigation = (e) => {
    if (e.keyCode === 13 || e.keyCode === 32) {
      onOptionSelect(option, index);
    } else if (e.keyCode === 40) {
      let next = e.currentTarget.nextElementSibling;
      if (!next) {
        next = e.currentTarget.parentNode.firstChild;
      }
      next.focus();
    } else if (e.keyCode === 38) {
      let prev = e.currentTarget.previousElementSibling;
      if (!prev) {
        prev = e.currentTarget.parentNode.lastChild;
      }
      prev.focus();
    }
  };

  return (
    <Option
      tabIndex={0}
      onClick={(e) => {
        onOptionSelect(option, index);
        e.currentTarget.blur();
      }}
      onKeyDown={(e) => {
        keyboardNavigation(e);
      }}
      aria-label="option"
      isChecked={isChecked}
    >
      {option}
      {isChecked && (
        <Icon style={{ backgroundColor: "transparent" }}>
          <SVGIcon svg={TickSVG} width={20} height={10} />
        </Icon>
      )}
    </Option>
  );
};

//SELECT

export const VoogSelect = ({
  label,
  placeholder,
  options,
  defaultValue,
  ...props
}) => {
  const setDefaultText = () => {
    if (placeholder) {
      return placeholder;
    }
    if (props.multiple) {
      if (defaultValue && defaultValue.length > 0) {
        return defaultValue.join(",");
      }
      return "Choose multiple";
    } else {
      defaultValue = defaultValue || "Choose";
      return defaultValue;
    }
  };

  const setDefaultValue = useCallback(() => {
    if (props.multiple) {
      return [];
    } else {
      return null;
    }
  }, []);

  const labelValue = label || "Label";

  const isDisabled = props.disabled && true;

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(setDefaultText);
  const [value, setValue] = useState(setDefaultValue);
  const wrapperRef = useRef();

  options = [
    "Apple",
    "Orange",
    "Berry",
    "Banana",
    "Peach",
    "Grapes",
    "Pineapple",
    "Gauva",
    "Strawberries",
    "Custard",
  ];

  const [optionProps, setOptionProps] = useState(
    options.map((option) => {
      return {
        name: option,
        isChecked: false,
      };
    })
  );

  const onOptionSelect = (newValue, index) => {
    if (props.multiple) {
      let valueString = "";
      let selectedOptions = [...value];
      if (selectedOptions.includes(newValue)) {
        selectedOptions = selectedOptions.filter(
          (option) => option !== newValue
        );
      } else {
        selectedOptions.push(newValue);
      }

      setValue(selectedOptions);
      const newProps = [...optionProps];
      newProps[index].isChecked = !newProps[index].isChecked;
      setOptionProps(newProps);
      //converting array to text for display
      for (let i = 0; i < selectedOptions.length; ++i) {
        const label = selectedOptions[i];
        if (i === selectedOptions.length - 1) {
          valueString += label;
        } else {
          valueString += `${label}, `;
        }
      }

      if (valueString !== "") {
        setText(valueString);
      } else {
        setText(placeholder || "Choose multiple");
      }
      //for single select
    } else {
      setValue(newValue);
      setText(newValue);
      //reset all check marks on options
      const newProps = [...optionProps];
      newProps.forEach((option) => {
        option.isChecked = false;
      });
      newProps[index].isChecked = true;
      setOptionProps(newProps);
      //and close the menu
      closeMenu();
    }
  };

  //Open close menu

  const openMenu = () => {
    setIsOpen(true);
    window.addEventListener("keydown", escapeCloseMenu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    window.removeEventListener("keydown", escapeCloseMenu);
  };

  //check for click outside and escape key to close the select menu

  const checkClickOutside = (e) => {
    if (!wrapperRef.current) return;
    if (!wrapperRef.current.contains(e.target)) {
      closeMenu();
    }
  };

  const escapeCloseMenu = (e) => {
    if (e.keyCode === 27) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("click", checkClickOutside);
    return () => {
      window.removeEventListener("click", checkClickOutside);
    };
  });

  //final component

  return (
    <Wrapper ref={wrapperRef} isDisabled={isDisabled}>
      <HiddenSelect
        name={label}
        value={value}
        multiple={props.multiple}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </HiddenSelect>

      <Select
        htmlFor={labelValue}
        tabIndex={0}
        aria-label="listbox"
        onClick={openMenu}
        onKeyDown={(e) => {
          if (e.keyCode === 13 || e.keyCode === 32) {
            openMenu();
          }
        }}
        isOpen={isOpen}
      >
        <SelectText value={text} tabIndex={-1} />
        <Icon>
          <SVGIcon svg={DropdownArrowSVG} />
        </Icon>
        <SelectHeader aria-hidden="true" htmlFor={labelValue}>
          {labelValue}
        </SelectHeader>
      </Select>
      <OptionsDiv isOpen={isOpen}>
        {optionProps.map((optionProp, index) => (
          <OptionComponent
            option={optionProp.name}
            index={index}
            key={index}
            onOptionSelect={onOptionSelect}
            isChecked={optionProp.isChecked}
          />
        ))}
      </OptionsDiv>
    </Wrapper>
  );
};

VoogSelect.propTypes = {
  label: PropTypes.string,
};

VoogSelect.defaultProps = {
  label: "Something here",
};
