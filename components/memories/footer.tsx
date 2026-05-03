"use client"

import { motion } from "framer-motion"
import { Heart, Instagram, Twitter, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16 relative overflow-hidden">
      {/* Background Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 20, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i,
              delay: i * 0.5
            }}
            className="absolute"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + (i % 4) * 20}%`
            }}
          >
            <Heart className="w-12 h-12 fill-primary-foreground" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-primary-foreground/20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 mb-4"
          >
            <Heart className="w-6 h-6 fill-primary" />
            <Sparkles className="w-8 h-8 text-primary" />
            <Heart className="w-6 h-6 fill-primary" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Mulai Kisah Cinta Kalian
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Bergabunglah dengan ribuan pasangan yang telah mempercayakan momen romantis mereka kepada kami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            
            <Button className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 group">
              <Heart className="w-4 h-4 mr-2 group-hover:scale-125 transition-transform fill-current" />
              Daftar
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="w-8 h-8 text-primary fill-primary" />
              </motion.div>
              <span className="text-xl font-serif font-bold">LoveStory</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              Platform terbaik untuk pasangan menyimpan dan berbagi kenangan romantis bersama orang tercinta.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 fill-primary text-primary" />
              Fitur
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Album Bersama</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Video Memories</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Timeline Cinta</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Slideshow Romantis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 fill-primary text-primary" />
              ...
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-primary-foreground/20">
          <p className="text-primary-foreground/50 text-sm flex items-center justify-center gap-2">
            Dibuat dengan 
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>
            untuk pasangan di seluruh Indonesia &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
