import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, relatedProducts, products } from "../../lib/products";
import { services } from "../../lib/content";
import { ServiceIcon } from "../../components/ServiceIcon";
import BurgerMenu from "../../components/BurgerMenu";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product ? `${product.name} — KULT Collection` : "Produit — KULT Collection",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = relatedProducts(slug);

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* ===== Yellow header ===== */}
      <header className="relative z-20 flex h-[88px] items-center justify-between overflow-hidden bg-[#fff45c] px-5 sm:h-[108px] sm:px-8">
        <div className="relative z-10">
          <BurgerMenu barWidth={48} barHeight={7} gap={5} />
        </div>
        <Link href="/" className="relative z-10 text-center leading-none">
          <span className="block text-[22px] font-bold tracking-[0.18em] text-[#39b89a] sm:text-[28px]">
            KULT
          </span>
          <span className="block text-[9px] font-light tracking-[0.4em] text-[#39b89a] sm:text-[11px]">
            COLLECTION
          </span>
        </Link>
        <div className="relative z-10 flex items-center gap-3">
          <span className="font-label text-[26px] text-black sm:text-[32px]">FR</span>
        </div>
      </header>

      {/* ===== PDP content ===== */}
      <div className="mx-auto w-full max-w-[1608px] px-5 py-8 sm:px-10 sm:py-12">
        {/* breadcrumb */}
        <nav className="font-display mb-8 text-[16px] text-[#666] sm:text-[19px]">
          <Link href="/" className="hover:text-black">Accueil</Link>
          {" / "}
          <span>{product.category}</span>
          {product.subcategory && <>{" / "}<span>{product.subcategory}</span></>}
          {" / "}
          <span className="text-black">{product.name}</span>
        </nav>

        {/* hero */}
        <section className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </section>

        {/* related */}
        {related.length > 0 && (
          <section className="mt-24">
            <h2 className="font-label mb-10 text-[36px] text-[#ff5883] sm:text-[48px]">
              Vous pourriez aussi aimer
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
              {related.map((r) => (
                <Link key={r.slug} href={`/produit/${r.slug}`} className="group flex flex-col gap-4">
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width:640px) 90vw, 30vw"
                    />
                  </div>
                  <h3 className="font-display text-[20px] font-bold uppercase text-black sm:text-[24px]">
                    {r.name}
                  </h3>
                  <p className="font-display text-[20px] text-black sm:text-[24px]">{r.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* ===== Services banner ===== */}
      <section className="mx-auto w-full max-w-[1608px] px-5 py-12 sm:px-10">
        <div className="grid grid-cols-1 divide-y divide-neutral-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3 px-6 py-8 text-center text-neutral-700">
              <ServiceIcon type={s.icon} />
              <div>
                <p className="text-[15px] font-light tracking-wide sm:text-[18px]">{s.title}</p>
                <p className="mt-1 text-[14px] font-light">{s.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer id="contact" className="w-full bg-black text-white">
        <div className="mx-auto grid max-w-[1608px] grid-cols-1 gap-10 px-8 py-16 sm:grid-cols-3 sm:px-10">
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">ADDRESSE</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>Siège Social</p>
              <p>Kult &amp; Co</p>
              <p>78 Avenue G.De.Gaulle</p>
              <p>66200 Elne</p>
              <p>France</p>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">NEWSLETTER</h3>
            <form className="mt-4 max-w-[345px]" action="#">
              <input
                type="email"
                placeholder="Email Adresse"
                className="h-[52px] w-full bg-white px-4 text-[16px] font-medium text-black placeholder:text-black focus:outline-none"
              />
              <button className="mt-3 h-[52px] w-full border border-white bg-black text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-black">
                SUBSCRIBE NOW
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-[20px] font-medium italic sm:text-[24px]">CONTACT</h3>
            <div className="mt-4 space-y-1.5 text-[16px] font-medium sm:text-[20px]">
              <p>+(33). 6.51.67.86.32</p>
              <p className="break-all">Mail : kult.concepthome@gmail.com</p>
            </div>
            <h3 className="mt-6 text-[20px] font-medium italic sm:text-[24px]">NOS RESEAUX :</h3>
          </div>
        </div>
      </footer>
    </main>
  );
}
