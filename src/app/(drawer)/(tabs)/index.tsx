import { FlatList, Text, View } from 'react-native'

import { Input } from '@/components/input'
import { MenuButton } from '@/components/menu-button'
import { Avatar } from '@/components/avatar'
import { Email } from '@/components/email'
import { FloatButton } from '@/components/float-button'

import { EMAILS } from '@/utils/emails'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 p-4 pt-14">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />

        <Avatar source={{ uri: 'https://github.com/gabjohann.png' }} />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="mt-6 font-subtitle text-sm uppercase text-gray-400">
            Entrada
          </Text>
        )}
      />

      <FloatButton icon="edit" />
    </View>
  )
}
