import type { PropsWithChildren } from "react";

export function Hero({ children }: PropsWithChildren) {
  return <section id="hero">{children}</section>;
}

export function About({ children }: PropsWithChildren) {
  return <section id="sobre">{children}</section>;
}

export function Services({ children }: PropsWithChildren) {
  return <section id="procedimentos">{children}</section>;
}

export function Gallery({ children }: PropsWithChildren) {
  return <section id="resultados">{children}</section>;
}

export function Testimonials({ children }: PropsWithChildren) {
  return <section id="depoimentos">{children}</section>;
}

export function FAQ({ children }: PropsWithChildren) {
  return <section id="conteudos">{children}</section>;
}

export function CTA({ children }: PropsWithChildren) {
  return <section id="final-cta">{children}</section>;
}

export function Footer({ children }: PropsWithChildren) {
  return <footer>{children}</footer>;
}
