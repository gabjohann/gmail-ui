import { ReactNode } from 'react'
import { View, TextInput, TextInputProps } from 'react-native'

import { colors } from '@/styles/colors'

type InputProps = {
  children: ReactNode
}

function Input({ children }: InputProps) {
  return (
    <View className="h-14 w-full flex-row items-center gap-4 rounded-lg bg-gray-800 p-4">
      {children}
    </View>
  )
}

function InputField({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-base font-normal text-white"
      placeholderTextColor={colors.gray[400]}
      cursorColor={colors.blue[600]}
      {...rest}
    />
  )
}

Input.Field = InputField

export { Input }
