import { Image, ImageProps } from 'react-native'
import clsx from 'clsx'

type AvatarProps = ImageProps & {
  size?: 'small' | 'medium'
}

export function Avatar({ size = 'medium', ...rest }: AvatarProps) {
  return (
    <Image
      className={clsx('rounded-full', {
        'h-8 w-8': size === 'small',
        'h-10 w-10': size === 'medium',
      })}
      alt=""
      {...rest}
    />
  )
}
