import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/contact">Contato</Link></li>
          <li><Link href="/products">Produtos</Link></li>
        </ul>
      </nav>
    </div>
  );
}
