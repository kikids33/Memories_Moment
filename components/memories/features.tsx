"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles, Image, Film, Heart } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Album Cinta",
    description: "Kumpulkan foto dan video romantis dalam album spesial untuk kalian berdua."
  },
  {
    icon: Image,
    title: "Kualitas Penuh",
    description: "Simpan foto dalam resolusi tertinggi tanpa mengurangi keindahannya."
  },
  {
    icon: Film,
    title: "Video Kenangan",
    description: "Putar ulang video momen spesial dengan kualitas HD kapan saja."
  },
]

export function Features() {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {
        console.log("Autoplay diblokir browser");
      });
    }
  };

  const pauseMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <section
      id="features"
      onClick={playMusic} // 🔥 ini kunci: klik pertama langsung play
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* AUDIO */}
      <audio ref={audioRef} src="/music/love.mp3" loop />

      {/* Tombol manual (optional tapi bagus buat kontrol) */}
      <div className="text-center mb-6">
        <button
          onClick={(e) => {
            e.stopPropagation(); // biar tidak trigger section
            playMusic();
          }}
          className="px-4 py-2 bg-pink-500 text-white rounded-full mr-2"
        >
          ❤️ Play
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            pauseMusic();
          }}
          className="px-4 py-2 bg-gray-400 text-white rounded-full"
        >
          ⏸ Pause
        </button>
      </div>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <Heart className="w-7 h-7 text-accent fill-accent" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Fitur Untuk Pasangan
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Semua yang kalian butuhkan untuk menjaga api cinta tetap menyala selamanya
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 shadow-lg"
            >
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border">
            <Sparkles className="w-5 h-5 text-primary" />
            <span>Gratis untuk selamanya bagi pasangan</span>
            <Heart className="w-5 h-5 text-accent fill-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}