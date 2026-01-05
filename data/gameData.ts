
import { Encounter } from '../types';

export const ENCOUNTERS: Record<string, Encounter> = {
  strange_traveler: {
    id: 'strange_traveler',
    title: 'A Lonely Wanderer',
    description: 'A cloaked figure stands by the dusty fork. They look parched and weary.',
    icon: '👤',
    choices: [
      {
        id: 'help_wanderer',
        text: 'Give them food (10 Food)',
        consequenceText: 'The wanderer thanks you deeply. "May the blocks be with you."',
        foodCost: 10,
        reputationGain: 2,
        flagToSet: 'helped_wanderer',
        color: 'bg-emerald-600'
      },
      {
        id: 'scholar_advice',
        text: 'Scholar\'s Counsel',
        consequenceText: 'Your Scholar recognizes the traveler as a disgraced noble. You gain massive renown by treating them with high honor.',
        requiredPassengerType: 'scholar',
        foodCost: 5,
        reputationGain: 15,
        color: 'bg-indigo-600'
      },
      {
        id: 'ignore_wanderer',
        text: 'Keep driving.',
        consequenceText: 'You save your rations but feel a chill in the air.',
        color: 'bg-stone-600'
      }
    ]
  },
  hungry_merchant: {
    id: 'hungry_merchant',
    title: 'Stranded Merchant',
    description: 'A broken wagon sits by the road. The merchant is desperate for supplies.',
    icon: '🛒',
    choices: [
      {
        id: 'merchant_negotiation',
        text: 'Merchant\'s Haggle',
        consequenceText: 'Your on-board Merchant spots rare spices in the back. You buy the whole lot for a pittance!',
        requiredPassengerType: 'merchant',
        goldCost: 20,
        goldGain: 80,
        color: 'bg-yellow-700'
      },
      {
        id: 'trade_supplies',
        text: 'Sell 15 Food for 45 Gold',
        consequenceText: 'The merchant is relieved. "You saved my livelihood!" You make a profit.',
        foodCost: 15,
        goldGain: 45,
        color: 'bg-amber-600'
      },
      {
        id: 'buy_stock',
        text: 'Buy Bulk Food (30 Gold for 40 Food)',
        consequenceText: 'He sells you his remaining stock at a discount to get home faster.',
        goldCost: 30,
        foodGain: 40,
        color: 'bg-blue-600'
      }
    ]
  },
  bandit_toll: {
    id: 'bandit_toll',
    title: 'The Shadowed Gate',
    description: 'Armed blocky riders block the path. "Toll road," their leader sneers.',
    icon: '⚔️',
    choices: [
      {
        id: 'guard_standoff',
        text: 'Guard\'s Threat',
        consequenceText: 'Your Guard steps forward, hand on their hilt. The bandits back down without a fight.',
        requiredPassengerType: 'guard',
        reputationGain: 5,
        color: 'bg-slate-800'
      },
      {
        id: 'pay_toll',
        text: 'Pay the toll (25 Gold)',
        consequenceText: 'They let you pass with mock salutes.',
        goldCost: 25,
        color: 'bg-red-700'
      },
      {
        id: 'intimidate',
        text: 'Intimidate (Requires 5 REXP)',
        consequenceText: 'The bandits recognize your influence and step aside.',
        requiredFlag: 'reputation_5', 
        reputationGain: 2,
        color: 'bg-purple-700'
      }
    ]
  },
  mystic_oracle: {
    id: 'mystic_oracle',
    title: 'The Gilded Seer',
    description: 'A mystic floating above the road senses your growing reputation.',
    icon: '🔮',
    choices: [
      {
        id: 'cook_offering',
        text: 'Cook\'s Special Meal',
        consequenceText: 'Your Cook prepares a meal so divine it impresses the Oracle. "A mortal taste of the stars!"',
        requiredPassengerType: 'cook',
        foodCost: 15,
        reputationGain: 20,
        color: 'bg-pink-600'
      },
      {
        id: 'blessing',
        text: 'Request Grace (Req 15 REXP)',
        consequenceText: '"Your kindness echoes in the void." You feel revitalized!',
        requiredFlag: 'reputation_15',
        foodGain: 100,
        reputationGain: 5,
        color: 'bg-blue-400'
      },
      {
        id: 'offering',
        text: 'Golden Offering (50 Gold)',
        consequenceText: 'The mystic grants you hidden knowledge of the paths ahead.',
        goldCost: 50,
        reputationGain: 10,
        color: 'bg-yellow-500'
      }
    ]
  },
  food_cart: {
    id: 'food_cart',
    title: 'Chef Block\'s Mobile Grill',
    description: 'The aroma of grilled mystery meat is intoxicating. "Hungry, traveler?"',
    icon: '🍳',
    choices: [
      {
        id: 'snack',
        text: 'Light Snack (8G -> 15 Food)',
        consequenceText: 'A tasty, quick bite to keep you alert.',
        goldCost: 8,
        foodGain: 15,
        color: 'bg-green-500'
      },
      {
        id: 'platter',
        text: 'Gourmet Feast (30G -> 65 Food)',
        consequenceText: 'A massive spread! Your crew is energized and the road ahead looks shorter.',
        goldCost: 30,
        foodGain: 65,
        color: 'bg-green-700'
      },
      {
        id: 'rob_cart',
        text: 'Rob the Cart!',
        consequenceText: 'You snatch the supply crates and flee. The chef\'s screams haunt your caravan.',
        foodGain: 45,
        reputationCost: 30,
        color: 'bg-red-900'
      }
    ]
  },
  rival_caravan: {
    id: 'rival_caravan',
    title: 'Iron-Clad Competitors',
    description: 'A massive, black-painted caravan pulls alongside yours. "We need supplies for the crossing. We\'ll pay double the market rate if you have the guts to ignore your contract."',
    icon: '🖤',
    choices: [
      {
        id: 'sell_high',
        text: 'Sell Rations (Get 100 Gold)',
        consequenceText: 'You pocket a massive sum, but the Guild is furious you broke your neutrality. Word spreads of your greed.',
        foodCost: 20,
        goldGain: 100,
        reputationCost: 25,
        color: 'bg-amber-800'
      },
      {
        id: 'ignore_rival',
        text: 'Decline Offer',
        consequenceText: 'They sneer and accelerate past. "Suit yourself, blockhead."',
        reputationGain: 2,
        color: 'bg-stone-600'
      }
    ]
  },
  master_artisan: {
    id: 'master_artisan',
    title: 'Gideon the Wheelwright',
    description: 'A master artisan sits by a mobile forge. "Your axles are groaning, traveler. I can make them glide like silk for a price."',
    icon: '🔨',
    choices: [
      {
        id: 'axle_upgrade',
        text: 'Reinforced Axles (150 Gold)',
        consequenceText: 'Gideon works through the night. Your caravan now moves with significantly less effort! (Permanent Food Efficiency)',
        goldCost: 150,
        flagToSet: 'axle_upgrade',
        color: 'bg-indigo-700'
      },
      {
        id: 'chassis_polish',
        text: 'Chassis Polish (50 Gold)',
        consequenceText: 'Your caravan gleams in the sun. Travelers treat you with much higher respect.',
        goldCost: 50,
        reputationGain: 15,
        color: 'bg-yellow-500'
      }
    ]
  },
  mysterious_gambler: {
    id: 'mysterious_gambler',
    title: 'The Shifty Gambler',
    description: '"Care to try your luck?" a hooded figure asks, gesturing to three closed wooden crates. "Ten gold to open one. High risk, high reward!"',
    icon: '🎲',
    choices: [
      {
        id: 'gamble_1',
        text: 'Pick the Small Crate (10 Gold)',
        consequenceText: 'You find a hidden stash of premium jerky! You feel energized.',
        goldCost: 10,
        foodGain: 40,
        color: 'bg-stone-700'
      },
      {
        id: 'gamble_2',
        text: 'Pick the Heavy Crate (10 Gold)',
        consequenceText: 'It\'s filled with lead weights. Your axles creak under the useless burden. You feel foolish.',
        goldCost: 10,
        reputationCost: 5,
        color: 'bg-stone-700'
      },
      {
        id: 'gamble_3',
        text: 'Pick the Locked Crate (10 Gold)',
        consequenceText: 'A snake leaps out! You drop your coin purse while fending it off. You lose extra gold.',
        goldCost: 10,
        goldGain: -20,
        color: 'bg-stone-700'
      }
    ]
  },
  merchant_convoy: {
    id: 'merchant_convoy',
    title: 'The Gilded Convoy',
    description: 'A massive line of wagons stretches across the horizon. They have plenty of luxury goods.',
    icon: '🐫',
    choices: [
      {
        id: 'sell_reputation',
        text: 'Use Influence (Req 10 REXP)',
        consequenceText: 'They trade at a loss just to please a legend like you.',
        requiredFlag: 'reputation_10',
        goldGain: 60,
        reputationCost: 5,
        color: 'bg-blue-600'
      },
      {
        id: 'buy_provisions',
        text: 'Buy Provisions (40G -> 80 Food)',
        consequenceText: 'You secure high-quality iron rations.',
        goldCost: 40,
        foodGain: 80,
        color: 'bg-orange-500'
      },
      {
        id: 'charity',
        text: 'Donate 20G to their Guard',
        consequenceText: 'The mercenaries spread word of your generosity.',
        goldCost: 20,
        reputationGain: 15,
        color: 'bg-emerald-500'
      }
    ]
  },
  waystation: {
    id: 'waystation',
    title: 'Border Waystation',
    description: 'A major fortified supply point in the middle of nowhere.',
    icon: '🚩',
    choices: [
      {
        id: 'resupply',
        text: 'Full Resupply (40 Gold)',
        consequenceText: 'You top off all provisions and repair the wagon.',
        goldCost: 40,
        foodGain: 100,
        color: 'bg-cyan-600'
      },
      {
        id: 'help_guards',
        text: 'Donate Supplies (25 Food)',
        consequenceText: 'The guards are thankful. Word of your generosity spreads.',
        foodCost: 25,
        reputationGain: 12,
        color: 'bg-indigo-600'
      }
    ]
  },
  haven_checkpoint: {
    id: 'haven_checkpoint',
    title: 'Eastmere Haven',
    description: 'The golden gates of the Haven loom ahead. A safe place for blocky folk.',
    icon: '🏰',
    choices: [
      {
        id: 'continue_loop',
        text: 'Resupply and Go Further',
        consequenceText: 'You rest for a night and head back into the wilder chunks.',
        action: 'continue_journey',
        foodGain: 50,
        color: 'bg-emerald-500'
      },
      {
        id: 'retire_journey',
        text: 'Settle Down Forever',
        consequenceText: 'Your journey ends here. You buy a small house and watch the caravans go by.',
        action: 'end_journey',
        color: 'bg-amber-400'
      }
    ]
  }
};
