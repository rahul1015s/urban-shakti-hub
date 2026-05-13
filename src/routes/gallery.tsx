import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./about";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inside Urban Shakti" },
      { name: "description", content: "A look inside the Urban Shakti training floor — equipment, sessions, community moments." },
      { property: "og:title", content: "Gallery — Urban Shakti" },
      { property: "og:description", content: "Inside the floor." },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const SHOTS = [
  "photo-1534438327276-14e5300c3a48",
  "photo-1581009146145-b5ef050c2e1e",
  "photo-1583454110551-21f2fa2afe61",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1517836357463-d25dfeac3438",
  "photo-1593095948071-474c5cc2989d",
  "photo-1544367567-0f2fcb009e0b",
  "photo-1476480862126-209bfaa8edc8",
  "photo-1546483875-ad9014c88eba",
  "photo-1599058917765-a780eda07a3e",
  "photo-1605296867424-35fc25c9212a",
  "photo-1540497077202-7c8a3999166f",
];

const IMG = (id: string, h: number) => `https://images.unsplash.com/${id}?w=600&h=${h}&fit=crop&q=80&auto=format`;

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={<>Inside the <span className="text-primary">floor.</span></>}
        sub="No filters. No staging. Just real members on the real training floor."
        img="photo-1534438327276-14e5300c3a48"
      />

      <section className="section-pad">
        <div className="container-x columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {SHOTS.map((id, i) => {
            const heights = [600, 800, 500, 700, 900, 600];
            const h = heights[i % heights.length];
            return (
              <div key={i} className="mb-4 break-inside-avoid overflow-hidden group cursor-zoom-in">
                <img
                  src={IMG(id, h)}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto image-grade group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
