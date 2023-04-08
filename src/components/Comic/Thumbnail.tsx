import Image from "next/image"
import { Box } from "@chakra-ui/react"

interface ThumbnailProps {
  src: string;
  alt: string;
}

export const Thumbnail = ({ src, alt }: ThumbnailProps) => {
  return (
    <Box
      position="relative"
      width="100%"
      style={{ aspectRatio: '1/1.5' }}
      _groupHover={{
        transition: 'transform 0.3s',
        transform: 'translateY(-1%)'
      }}
    >
      <Image
        src={src}
        fill
        style={{ objectFit: 'contain' }}
        alt={alt}
      />
    </Box>
  )
};