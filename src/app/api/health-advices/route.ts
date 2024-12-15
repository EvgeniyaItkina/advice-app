import { NextResponse } from 'next/server';

export async function GET() {
    const healthAdvices = [
        "Exercise at least once a year to remember what it feels like.",
        "If it's hard to quit sugar in your coffee, just drink the coffee and sugar separately.",
        "Don't forget to drink water - the plants on your desk aren't the only ones that need it.",
        "Eat something green every day - even if it's green apple-flavored candy.",
        "Going to bed early? Tell yourself it's a free massage for your soul.",
        "Vegetables are important. Give your schnitzel a break and look at it from a health angle.",
        "Fitness is for those who have energy. If you don't - take a nap instead.",
        "Laugh more - it strengthens your abs and saves you a gym membership.",
        "Run only if there's a sale at the supermarket or your dog has escaped.",
        "Meditation is nice, but start with five minutes of quiet first.",
        "Eat a banana with a smile - it will look less lonely.",
        "Instead of taking the elevator, talk to it. You might burn calories explaining yourself.",
        "Drink warm water with lemon - it gives the impression you know something about health.",
        "Start your morning with a deep breath - it may be the last moment of quiet today.",
        "Eat a healthy breakfast - pizza is still a triangle, which is geometric and therefore healthy.",
        "Go for a walk - even walking to the fridge counts as physical activity.",
        "Do yoga - feel like you're floating for a moment, especially after falling in tree pose.",
        "If broccoli is staring at you, smile back. It's food with feelings too.",
        "Try to sleep for eight hours - at least twice a week, just for fun.",
        "Eat nuts - or break them. It counts as a hand workout.",
        "Eat by color: red - strawberries, green - mint, brown - chocolate.",
        "Drink less cola - save room for black coffee.",
        "Always be careful: if you peel too much off a cucumber, eat the peel. 'It's a shame to waste it.'",
        "Exercise with a partner - you'll compete to see who's more tired.",
        "If a doctor tells you to rest, ask for it in writing to show your boss.",
        "Don't try all diets at once - just wear looser clothes.",
        "Eat half your plate… and leave the rest for 'tomorrow'.",
        "Smiling for health is free - so laugh even without a reason, no one needs to know why.",
        "Learn to slow down, except at a buffet where there's a line.",
        "If you decide to go for a run, don't forget where you were running away from.",
    ];

    return NextResponse.json(healthAdvices);
}