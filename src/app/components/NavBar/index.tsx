'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function MyNavBar() {
  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 350;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  const [activeLink, setActiveLink] = React.useState<string | null>(null);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string,
  ) => {
    handleSmoothScroll(event, targetId);
    setActiveLink(targetId); // Atualiza o estado com o ID do link clicado
  };

  return (
    <Navbar
      style={{ height: 'auto' }}
      className="bg-primaryColor-6 flex justify-around sticky top-0 z-50"
    >
      <NavbarBrand as={Link} href="#">
        <Image
          src={'/images/logoBranca2.png'}
          width={80}
          height={80}
          alt="Logotipo"
        />
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          href="#aboutMe"
          active={activeLink === 'aboutMe'}
          onClick={(e) => handleClick(e, 'aboutMe')}
          className="text-primaryColor-8 hover:text-blue-500"
        >
          Sobre Mim
        </NavbarLink>
        <NavbarLink
          href="services"
          active={activeLink === 'services'}
          onClick={(e) => handleClick(e, 'services')}
          className="text-primaryColor-8 hover:text-blue-500"
        >
          Serviços
        </NavbarLink>
        <NavbarLink
          href="faq"
          active={activeLink === 'faq'}
          onClick={(e) => handleClick(e, 'faq')}
          className="text-primaryColor-8 hover:text-blue-500"
        >
          FAQ
        </NavbarLink>
        <NavbarLink
          href="#testimonials"
          active={activeLink === 'testimonials'}
          onClick={(e) => handleClick(e, 'testimonials')}
          className="text-primaryColor-8 hover:text-blue-500"
        >
          Testemunhas
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
