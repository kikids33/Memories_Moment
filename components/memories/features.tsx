"use client"

import { motion } from "framer-motion"
import { Cloud, Lock, Share2, Sparkles, Image, Film, Heart } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Album Cinta",
    description: "Kumpulkan foto dan video romantis dalam album spesial untuk kalian berdua."
  },
 
  {
    icon: Share2,
    title: "Berbagi Momen",
    description: "Kirim kenangan manis langsung ke pasangan dengan sekali sentuhan."
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
  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-4"
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <Heart className="w-7 h-7 text-accent fill-accent" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Fitur Untuk Pasangan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Semua yang kalian butuhkan untuk menjaga api cinta tetap menyala selamanya
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card rounded-3xl p-8 border-2 border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <motion.div 
                  whileHover={{ rotate: 10 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors"
                >
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 flex items-center gap-2">
                  {feature.title}
                  <Heart className="w-4 h-4 text-accent fill-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-3 rounded-full border border-primary/20">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">Gratis untuk selamanya bagi pasangan</span>
            <Heart className="w-5 h-5 text-accent fill-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
