import React from 'react';
import { ResourceState } from './types';

export const INITIAL_RESOURCES: ResourceState = {
  food: 100,
  gold: 32,
  reputation: 0,
  journeyCount: 1,
  progress: 0,
  lives: 3,
  score: 0,
  passengers: [],
  vehicle: 'caravan',
};

export const WORLD_WIDTH = 1200;
export const WORLD_HEIGHT = 600;
export const ROAD_TOP = 150;
export const ROAD_BOTTOM = 450;
export const PLAYER_SPEED = 5;
export const SCROLL_SPEED = 2.5;
export const FOOD_DRAIN_RATE = 0.05;
export const INTERACTION_RANGE = 60;

export const WORLD_COLORS = {
  road: '#866043',     // Dirt path
  grass: '#55aa33',    // Grass block
  caravan: '#fbbf24',
  highlight: '#ffffff',
  node: '#7a7a7a',     // Stone block
};

export const Icons = {
  Food: () => (
    <div className="w-6 h-6 bg-red-600 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">🥩</div>
  ),
  Gold: () => (
    <div className="w-6 h-6 bg-yellow-400 border-2 border-black flex items-center justify-center text-[10px] text-black font-bold">💰</div>
  ),
  Reputation: () => (
    <div className="w-6 h-6 bg-blue-500 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">★</div>
  ),
};