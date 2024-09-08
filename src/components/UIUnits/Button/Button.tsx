import React from 'react';
import styles from './Button.module.scss';

type ButtonVariants = 'FILL_WHITE' | 'FILL_YELLOW' | 'FILL_GREEN' | 'FILL_NONE_TEXT';

type Props = {
  label: string;
  variant?: ButtonVariants,
  icon?: React.JSX.Element,
  iconPos?: 'LEFT' | 'RIGHT'
  onClick: () => void;
  disabled?: boolean;
  size?: 'sm' | 'lg';
  fullWidth?: boolean;
};

const Button: React.FC<Props> = ({
  label, variant = 'FILL_GREEN', icon, iconPos = 'RIGHT', onClick, disabled, size, fullWidth,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={
      `${styles.button} ${styles[`button_${variant}`]} ${styles[`${size}`]} ${fullWidth && styles.fullWidth}`
    }
    disabled={disabled}
  >
    {icon && iconPos && (
      <span className={styles.iconL}>
        {icon && iconPos === 'LEFT' && (icon)}
      </span>
    )}

    {label}

    {icon && iconPos && (
      <span className={styles.iconR}>
        {icon && iconPos === 'RIGHT' && (icon)}
      </span>
    )}
  </button>
);

export default Button;