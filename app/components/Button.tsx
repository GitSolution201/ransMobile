import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'success';
  text: string;
  position?: 'absolute' | 'relative';
  bottom?: number;
  disabled?: boolean;
}

const VARIANT_STYLES = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-[#4CD964]'
};

export function Button({ 
  variant = 'primary',
  text,
  position = 'relative',
  bottom,
  className = '',
  disabled = false,
  ...props 
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`
        h-[56px] rounded-2xl items-center justify-center w-[80%] self-center
        ${position === 'absolute' ? 'absolute top-[90%] left-[10%] right-[10%]' : ''}
        ${bottom ? `bottom-${bottom}` : ''}
        ${disabled ? 'bg-gray-200' : VARIANT_STYLES[variant]}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <Text className={`font-semibold text-base ${disabled ? 'text-gray-400' : 'text-white'}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
} 