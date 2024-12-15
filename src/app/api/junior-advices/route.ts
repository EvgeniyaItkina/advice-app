import { NextResponse } from 'next/server';

export async function GET() {
    const juniorAdvices = [
        "Write code as if your future boss will read it… and cry.",
        "If the code works - don't touch it. If it doesn't - pretend it's someone else's fault.",
        "'Hello World' is your first and best friend in programming.",
        "Don't fear bugs in the code - fear when there are no bugs, but it still doesn't work.",
        "Rename a variable to variable1 and feel like a pro.",
        "Google is your real team lead.",
        "Write a comment, even if you don't understand what you did.",
        "If something doesn't work - add a console.log. If it still doesn't work - add five more.",
        "Deploying on Friday is the best way to find out who your real friends are.",
        "If the code doesn't run, try restarting the computer. Then restart yourself.",
        "Never ask a senior developer: 'Why does this work?' He doesn't know either.",
        "The best function is the one that fits on a single screen. If it doesn't - buy a bigger monitor.",
        "Call cleaning up spaces in the code 'refactoring'.",
        "A Git commit named fix solves every problem.",
        "Shorten variable names to one letter: x means everything.",
        "'It works on my machine' has saved more juniors than Stack Overflow.",
        "Never add TODO comments to your code. You'll forget them anyway.",
        "Dark theme for the editor isn't about style - it's about saving your soul's energy.",
        "If a bug can't be fixed, declare it a feature.",
        "Admit honestly that you didn't know the difference between == and === until yesterday.",
        "If Stack Overflow doesn't help, just rewrite the question slightly differently.",
        "Always keep 30 tabs open in Google - so it looks like you're very busy.",
        "Call your folder 'final', then 'final_really_last_version2'.",
        "Commit often - it's better to be a living junior than a dead genius.",
        "If nothing works - just change the font in your editor.",
        "Write code with confidence that it's the compiler's problem, not yours.",
        "It's better to 'forget' to save a file than explain what you did.",
        "Ask a senior: 'What was it like here before me?' You'll hear: 'Exactly the same, just worse.'",
        "If the code looks like magic, it means you wrote it a long time ago.",
        "Believe in yourself: even seniors were juniors once, their bugs just aged poorly."
    ];

    return NextResponse.json(juniorAdvices);
}
