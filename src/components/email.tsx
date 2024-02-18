import { Text, View } from 'react-native'

import { Avatar } from './avatar'
import { MaterialIcons } from '@expo/vector-icons'

import { EmailDataProps } from '@/utils/emails'

import { colors } from '@/styles/colors'

type EmailProps = {
  data: EmailDataProps
}

export function Email({ data }: EmailProps) {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: data.avatar }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          {data.marker && (
            <MaterialIcons
              name="label-important"
              size={16}
              color={colors.yellow[600]}
            />
          )}

          <Text className="flex-1 font-subtitle text-lg text-gray-400">
            {data.name}
          </Text>

          <Text className="font-body text-sm text-gray-400">{data.date}</Text>
        </View>

        <Text
          className="font-body text-base text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {data.subject}
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="flex-1 font-body text-base text-gray-400"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            {data.message}
          </Text>

          <MaterialIcons
            name={data.start ? 'star' : 'star-outline'}
            size={22}
            color={data.start ? colors.yellow[600] : colors.blue[600]}
          />
        </View>
      </View>
    </View>
  )
}
