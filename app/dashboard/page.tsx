'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [progress, setProgress] = useState({
    currentWeek: 1,
    completedDays: 0,
    totalDays: 28,
    score: 0,
    streak: 0
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600 mb-8">
          4týdenní program: Stát se nenahraditelným v době AI
        </p>

        {/* Týdenní pokrok */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Týden {progress.currentWeek} / 4</h2>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${(progress.completedDays / progress.totalDays) * 100}%` }}
            />
          </div>
          <p className="text-gray-600">
            Dokončeno {progress.completedDays} z {progress.totalDays} dní
          </p>
        </div>

        {/* Gamifikace */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-2">🎯</div>
            <h3 className="text-lg font-semibold mb-1">Skóre</h3>
            <p className="text-3xl font-bold text-blue-600">{progress.score}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-2">🔥</div>
            <h3 className="text-lg font-semibold mb-1">Streak</h3>
            <p className="text-3xl font-bold text-orange-600">{progress.streak} dní</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="text-3xl mb-2">🏆</div>
            <h3 className="text-lg font-semibold mb-1">Odznaky</h3>
            <p className="text-3xl font-bold text-purple-600">0 / 12</p>
          </div>
        </div>

        {/* Další kroky */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Další kroky</h2>
          <div className="space-y-4">
            <Link href="/daily-tracker" className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
              <h3 className="font-semibold text-blue-900 mb-1">📊 Denní tracker</h3>
              <p className="text-sm text-blue-700">Zaznamnej dnešní pokrok</p>
            </Link>
            
            <Link href="/coach" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
              <h3 className="font-semibold text-purple-900 mb-1">🤖 AI Kouč</h3>
              <p className="text-sm text-purple-700">Zeptej se na radu</p>
            </Link>
          </div>
        </div>

        {/* Navigace */}
        <div className="flex gap-4">
          <Link href="/" className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
            ← Domů
          </Link>
        </div>
      </div>
    </div>
  );
}
