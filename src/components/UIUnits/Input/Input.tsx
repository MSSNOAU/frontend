import React, { useState } from "react";
// import OpenIcon from "@/assets/icons/arrowDownIcon.svg";
import styles from "./Input.module.scss";

export type OptionType = {
  id: string;
  name: string;
};

interface NormalInputProps {
  type: "NORMAL";
  onChange: (val: string) => void;
  title: string;
  showLabel?: boolean;
  value: string;
  placeholder: string;
  options?: OptionType[];
}

interface DropdownInputProps {
  type: "DROPDOWN";
  onChange: (val: OptionType) => void;
  title: string;
  showLabel?: boolean;
  options?: OptionType[];
  value: string;
  placeholder: string;
}

type Props = NormalInputProps | DropdownInputProps;

const Input: React.FC<Props> = ({
  title,
  type,
  value,
  onChange,
  options,
  placeholder,
  showLabel,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const renderInput = () => {
    let inputEl = <></>;
    switch (type) {
      case "NORMAL":
        inputEl = (
          <div className={styles.input}>
            {showLabel && <label htmlFor={title}>{title}</label>}
            <input
              type="text"
              id={title}
              onChange={(e) => onChange(e.target.value)}
              value={value}
              name={title}
              placeholder={placeholder}
            />
          </div>
        );
        break;
      case "DROPDOWN":
        if (options) {
          inputEl = (
            <div className={styles.dropDown}>
              <label htmlFor={title}>{title}</label>
              <button
                onClick={() => setOpenDropDown((prev) => !prev)}
                className={`${styles.dropDownBtn} ${
                  openDropDown && styles.isOpen
                }`}
              >
                {value || placeholder}

                {/* <span>
                  <OpenIcon width={24} />
                </span> */}
              </button>

              {openDropDown && (
                <div className={styles.options}>
                  {options.length ? (
                    <>
                      {options.map((option) => (
                        <button
                          key={option.id}
                          onClick={(e) => {
                            onChange(option);
                            setOpenDropDown(false);
                          }}
                        >
                          {option.name}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button key={"option.id"} onClick={() => {}} disabled>
                      No Group
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        }
        break;

      default:
        break;
    }

    return inputEl;
  };

  return renderInput();
};

export default Input;