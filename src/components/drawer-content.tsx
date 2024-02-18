import { Image, ScrollView, Text, View } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

import { DrawerButton } from '@/components/drawer-button'

import { CustomOptions } from '@/types /navigation'

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 overflow-hidden bg-gray-600">
      <View className="mt-20 w-full border-b border-gray-500 pb-6">
        <Image
          source={require('@/assets/logo.png')}
          alt=""
          className="ml-5 w-28"
          resizeMode="contain"
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions

            if (options.title === undefined) {
              return null
            }

            const onPress = () => {
              const event = drawerProps.navigation.emit({
                type: 'drawerItemPress',
                canPreventDefault: true,
                target: route.key,
              })

              if (!isFocused && !event?.defaultPrevented) {
                drawerProps.navigation.navigate(route.name, route.params)
              }
            }

            return (
              <View key={route.key}>
                {options.sectionTitle && (
                  <Text className="ml-4 mt-6 font-heading text-sm uppercase text-gray-400">
                    {options.sectionTitle}
                  </Text>
                )}

                <DrawerButton
                  onPress={onPress}
                  title={options.title}
                  isDivider={options.isDivider}
                  isFocused={isFocused}
                  iconName={options.iconName}
                  notifications={options.notifications}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
