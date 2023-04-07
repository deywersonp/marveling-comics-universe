import Image from "next/image";
import logo from '@/assets/images/logo.png';

export const Logo = () => {
  return (
    <Image
      src={logo}
      priority
      style={{ width: 250, height: 'auto' }}
      alt="Marveling Comics Universe"
    />
  )
};