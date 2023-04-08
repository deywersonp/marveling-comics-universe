import Image from "next/image"
import { Box, BoxProps } from "@chakra-ui/react"

interface ThumbnailProps extends BoxProps {
  src: string;
  alt: string;
}

export const Thumbnail = ({ src, alt, ...rest }: ThumbnailProps) => {
  return (
    <Box
      position="relative"
      width="100%"
      style={{ aspectRatio: '1/1.5' }}
      {...rest}
    >
      <Image
        src={src}
        fill
        sizes="350px"
        style={{ objectFit: 'contain' }}
        alt={alt}
      />
    </Box>
  )
};