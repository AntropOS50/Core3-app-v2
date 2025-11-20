'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DailyTrackerPage() {
  const [formData, setFormData] = useState({
    mood: 5,
    energy: 5,
    focus: 5,
    notes: '',
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // Ulož do localStorage
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`tracker-${today}`, JSON.stringify(formData));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            📊 Denní tracker
          </h1>
          <Link href="/dashboard" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            ← Zpět
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            {/* Nálada */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Nálada (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.mood}
                onChange={(e) => setFormData({ ...formData, mood: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-3xl font-bold text-blue-600 mt-2">
                {formData.mood}
              </div>
            </div>

            {/* Energie */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Energie (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.energy}
                onChange={(e) => setFormData({ ...formData, energy: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-3xl font-bold text-green-600 mt-2">
                {formData.energy}
              </div>
            </div>

            {/* Soustředění */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Soustředění (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.focus}
                onChange={(e) => setFormData({ ...formData, focus: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-center text-3xl font-bold text-purple-600 mt-2">
                {formData.focus}
              </div>
            </div>

            {/* Poznámky */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Poznámky
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Co ses dnes naučil? Jaké máš plány na zítra?"
              />
            </div>

            {/* Uložit */}
            <button
              onClick={handleSave}
              className="w-full px-6 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              💾 Uložit dnešní záznam
            </button>

            {saved && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center font-semibold">
                ✅ Úspěšně uloženo!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
