'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const remedies = [
  // Magic Oils - Fixed Price ₹500
  {
    id: 1,
    name: 'Love Attraction Oil',
    price: '₹500',
    category: 'Magic Oils',
    description:
      'Enchanted oil blend to attract love and enhance romantic connections',
    image: '/api/placeholder/300/300',
    properties: ['Love', 'Attraction', 'Romance'],
    isFixed: true,
  },
  {
    id: 2,
    name: 'Prosperity Oil',
    price: '₹500',
    category: 'Magic Oils',
    description: 'Sacred oil for manifesting abundance and financial success',
    image: '/api/placeholder/300/300',
    properties: ['Wealth', 'Success', 'Abundance'],
    isFixed: true,
  },
  {
    id: 3,
    name: 'Protection Oil',
    price: '₹500',
    category: 'Magic Oils',
    description: 'Powerful protective oil for spiritual shielding and safety',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Safety', 'Cleansing'],
    isFixed: true,
  },

  // Gems - Contact for Pricing
  {
    id: 4,
    name: 'Rose Quartz',
    price: 'Contact for Price',
    category: 'Gems',
    description: 'The stone of unconditional love and infinite peace',
    image: '/api/placeholder/300/300',
    properties: ['Love', 'Healing', 'Self-Love'],
  },
  {
    id: 5,
    name: 'Citrine',
    price: 'Contact for Price',
    category: 'Gems',
    description: 'The merchant stone for abundance and prosperity',
    image: '/api/placeholder/300/300',
    properties: ['Abundance', 'Success', 'Confidence'],
  },
  {
    id: 6,
    name: 'Emerald',
    price: 'Contact for Price',
    category: 'Gems',
    description: 'Stone of wisdom, growth, and patience',
    image: '/api/placeholder/300/300',
    properties: ['Wisdom', 'Growth', 'Patience'],
  },

  // Crystals - Contact for Pricing
  {
    id: 7,
    name: 'Amethyst Crystal',
    price: 'Contact for Price',
    category: 'Crystals',
    description: 'A natural tranquilizer and protective stone',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Clarity', 'Intuition'],
  },
  {
    id: 8,
    name: 'Clear Quartz Point',
    price: 'Contact for Price',
    category: 'Crystals',
    description: 'The master healer and energy amplifier',
    image: '/api/placeholder/300/300',
    properties: ['Healing', 'Amplification', 'Clarity'],
  },
  {
    id: 9,
    name: 'Black Tourmaline',
    price: 'Contact for Price',
    category: 'Crystals',
    description: 'Powerful protection against negative energy',
    image: '/api/placeholder/300/300',
    properties: ['Protection', 'Grounding', 'Cleansing'],
  },

  // Pure Rudraksha - Contact for Pricing
  {
    id: 10,
    name: 'Pure Rudraksha Mala (108 Beads)',
    price: 'Contact for Price',
    category: 'Pure Rudraksha',
    description:
      'Authentic Rudraksha mala for meditation and spiritual growth',
    image: '/api/placeholder/300/300',
    properties: ['Meditation', 'Spiritual Growth', 'Peace'],
  },
  {
    id: 11,
    name: 'Gauri Shankar Rudraksha',
    price: 'Contact for Price',
    category: 'Pure Rudraksha',
    description: 'Rare twin Rudraksha for harmony and relationships',
    image: '/api/placeholder/300/300',
    properties: ['Harmony', 'Relationships', 'Unity'],
  },
  {
    id: 12,
    name: '5 Mukhi Rudraksha',
    price: 'Contact for Price',
    category: 'Pure Rudraksha',
    description: 'Most common and powerful Rudraksha for overall well-being',
    image: '/api/placeholder/300/300',
    properties: ['Well-being', 'Health', 'Peace'],
  },

  // All Spiritual Items - Contact for Pricing
  {
    id: 13,
    name: 'Sacred Incense Set',
    price: 'Contact for Price',
    category: 'All Spiritual Items',
    description: 'Premium incense collection for meditation and rituals',
    image: '/api/placeholder/300/300',
    properties: ['Meditation', 'Purification', 'Ritual'],
  },
  {
    id: 14,
    name: 'Tibetan Singing Bowl',
    price: 'Contact for Price',
    category: 'All Spiritual Items',
    description: 'Handcrafted singing bowl for sound healing and meditation',
    image: '/api/placeholder/300/300',
    properties: ['Sound Healing', 'Meditation', 'Relaxation'],
  },
  {
    id: 15,
    name: 'Crystal Pyramid Set',
    price: 'Contact for Price',
    category: 'All Spiritual Items',
    description: 'Set of 7 chakra crystal pyramids for energy work',
    image: '/api/placeholder/300/300',
    properties: ['Chakra Healing', 'Energy Work', 'Balance'],
  },
];

const categories = [
  'All',
  'Magic Oils',
  'Gems',
  'Crystals',
  'Pure Rudraksha',
  'All Spiritual Items',
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredRemedies =
    selectedCategory === 'All'
      ? remedies
      : remedies.filter((remedy) => remedy.category === selectedCategory);

  return (
    <div className="min-h-screen mystical-gradient pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-handwritten text-5xl md:text-6xl text-accent-gold mb-4">
            Spiritual Remedies Store
          </h1>
          <p className="font-serif text-xl text-white/90 max-w-3xl mx-auto">
            Discover authentic spiritual items, crystals, gems, and sacred oils
            to enhance your mystical journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'mystical' : 'outline'}
              className={`${
                selectedCategory === category
                  ? 'bg-accent-neon-glow text-black'
                  : 'border-accent-neon-glow text-accent-neon-glow hover:bg-accent-neon-glow hover:text-black'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Offer - Only for Magic Oils */}
        {selectedCategory === 'Magic Oils' && (
          <Card className="mb-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-accent-gold">
            <CardContent className="text-center py-8">
              <h2 className="font-handwritten text-3xl text-accent-gold mb-4">
                🌟 Special Offer on Magic Oils 🌟
              </h2>
              <p className="font-serif text-white/90 text-lg mb-4">
                All Magic Oils at a fixed price - Perfect for beginners and
                experienced practitioners
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="font-handwritten text-3xl text-accent-gold">
                  Only ₹500 each
                </span>
              </div>
              <p className="font-serif text-white/80">
                ✨ Authentic blends ✨ Blessed & Energized ✨ Ready to use
              </p>
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredRemedies.map((remedy) => (
            <Card key={remedy.id} className="group hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">
                    {remedy.category === 'Magic Oils' && '🧪'}
                    {remedy.category === 'Gems' && '💎'}
                    {remedy.category === 'Crystals' && '🔮'}
                    {remedy.category === 'Pure Rudraksha' && '📿'}
                    {remedy.category === 'All Spiritual Items' && '✨'}
                  </div>
                </div>
                <CardTitle className="text-center">{remedy.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-white/80 text-sm mb-4 text-center">
                  {remedy.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {remedy.properties.map((property) => (
                    <span
                      key={property}
                      className="px-2 py-1 bg-accent-neon-glow/20 text-accent-neon-glow text-xs rounded-full"
                    >
                      {property}
                    </span>
                  ))}
                </div>

                <div className="text-center mb-4">
                  <span className="font-handwritten text-2xl text-accent-gold">
                    {remedy.price}
                  </span>
                </div>

                <Button className="w-full" size="sm">
                  {remedy.price === 'Contact for Price' ? 'Inquire Now' : 'Add to Cart'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="py-8">
              <h3 className="font-handwritten text-2xl text-accent-gold mb-4">
                Need Help Choosing?
              </h3>
              <p className="font-serif text-white/90 mb-6">
                Our spiritual advisor can help you select the perfect remedies
                for your specific needs and intentions.
              </p>
              <div className="space-y-2">
                <p className="font-serif text-white/80">
                  📞 Call: +91-9217673528
                </p>
                <p className="font-serif text-white/80">
                  📧 Email: vmadan6113@gmail.com
                </p>
                <p className="font-serif text-white/80">
                  📍 Address: C2A-106, JanakPuri, New Delhi, 110058
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}