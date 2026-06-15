const projectDescriptions = {
    // ==========================================================
    // GAMES
    // ==========================================================

    "coinheist": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>NES Assembly 6502</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Retro Console & Emulator Programming class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A competitive two-player retro game built to run on NES hardware and the Mesen emulator. It’s a race to collect 10 coins while using interactive power-ups to either mess with your opponent (Gun and Bomb) or getting you faster to the coins (Dash and Phase).
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>My Contributions</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Working alongside three friends, I designed all the graphics, and implemented them, and coded the dash mechanic, state-driven player animations, and the visual feedback for the gunshot and bomb explosion systems.
</p>
    `,
    
    // ----------------------------------------------------------
    "tribe_explorer": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; Platformer &bull; Remake</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Programming 2 class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A recreation of Tribe Explorer a 2D platformer, You have to survive trying not to fall in the lava or get caught by patrolling enemies, relying completely on movement and timing to survive.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Built in a proveded engine by DAE, as I implemented the game in C++. My biggest technical focus was writing a custom collision detection system using SVGs. I also built a complete audio and visual manager for animations and sound effects, and programmed the foundational AI pathing for the enemies.
</p>
    `,
    // ----------------------------------------------------------
    "crazy_pong": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; Lua Scripting &bull; Pong</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for a Software Engineering class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A Neon style take on the Pong. I added mechanics like dashing and dynamic power-ups, making the gameplay loop way faster and much more unpredictable than the original.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I developed this by combining a custom C++ engine (provided by DAE) with Lua scripting. I created the C++ bindings so we could use Lua scripts. Developed all the core gameplay mechanics using Lua scripts, and created the neon art assets.
</p>
    `,
    // ----------------------------------------------------------
    "ms_pacman": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Own Made Engine &bull; Full Recreating Ms.Pacman</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Programming 4 class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A full recreation of the arcade classic Ms. Pac-Man running on a custom C++ engine. Aside from the classic single-player experience, I expanded the game by adding Versus and Co-op multiplayer modes.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I built the underlying engine using the Minigin framework. I applied multiple different patterns from the book Game Programming Patterns.
</p>
    `,
    // ----------------------------------------------------------
    "sl1m3_editor": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Godot &bull; Level Editor</strong>
</h3>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A game with a built in level editor, built in Godot. Directly inspired by my platformer game SL1M3. It gives players the freedom to design their own levels, easily share them using unique codes, and speedrun against friends for the best times.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I remade almost all systems we use in SL1M3 translating them in to Godot, On that i created a level editor. I also engineered the backend sharing system, which translates grid-based object data into unique text strings so players can instantly load custom levels.
</p>
    `,
    // ----------------------------------------------------------
    "crown&castles": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Godot &bull; Tower Defense &bull; Strategy</strong>
</h3>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A strategic tower defense game where you manage your economy to survive increasingly difficult waves of enemies. You have to balance upgrading your Archer, Cannon, and Magic towers while timing powerful player abilities to stay alive.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I designed and programmed the core gameplay loop, including the enemy wave spawning, specific tower targeting logic, and the balancing of the upgrade system. I also built the interactive out-of-game lobby where players spend their hard-earned coins on permanent upgrades.
</p>
    `,
    // ----------------------------------------------------------
    "sl1m3": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; Lua Scripting &bull; Platformer</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for a Software Engineering class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A 2D platformer where you play as a slime navigating endless levels, shop-filled stages. The catch? The game tries to permanently deleting the level behind you, even shooting lasers trying to elimate you. This forces you to think and move fast.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I developed this by combining a custom C++ engine (provided by DAE) with Lua scripting. I created the C++ bindings so we could use Lua scripts. I scripted all the player mechanics in Lua including the dynamic level-deletion system, interactive objects, and the shop interface.
</p>
    `,
    // ----------------------------------------------------------
    "animals_on_set": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Unity &bull; Physics &bull; Local Multiplayer</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Game Project course.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A chaotic couch party game where you and your friends compete to score the most points by appearing in the camera frame while matching the current theme. Things don't stay friendly for long you can block opponents from the shot, slap them around, knock them into water to get there clothes off, or use traps to steal the clothing items you need to claim victory.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>My Contributions</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Working closely with my team, I owned the core character controllers and the physical interactions. I developed the custom ragdoll physics system, integrating the physics-driven movement with the character animations. Beyond the core gameplay, I programmed the logic driving the interactive lobby and game over scenes.
</p>
    `,

    // ==========================================================
    // MODS & TOOLS
    // ==========================================================

    "werewolves": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Java &bull; Spigot API &bull; Server Plugin</strong>
</h3>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A custom Minecraft plugin that brings the popular game "Werewolves" directly into the minecraft. It features 14 unique roles, a fully automated voting system, and a scripted day/night cycle.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Written in Java using the Spigot API. I had to manage complex game states, role assignments, voting system, emersive map mechanic with info chest and ofcourse the night cycle.
</p>
    `,
    
    "dragon_awakens": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>Paradox Script &bull; HOI4 &bull; Content Mod</strong>
</h3>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    An expansion mod for Hearts of Iron IV focusing on Central Asia. It adds focus trees and events for nations like Tibet, Bhutan, and Nepal.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    I used Paradox Script to build out the focus trees, dynamic events, and national spirits. As I believe the mod is well balanced I sadly decided to stop updating it after the No Compromise DLC as it broke most of the focus trees.
</p>
    `,

    "dual_rasterizer": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; DirectX &bull; Rendering</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Graphics Programming 1 class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A rendering engine that supports both CPU and GPU rasterization. It allows users to dynamically toggle between the two rendering pipelines in real-time to compare performance and visual output.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Built in C++ using DirectX. This involved writing the math for the software (CPU) rasterizer from scratch, alongside creating a hardware (GPU) pipeline to process and render the exact same mesh data.
</p>
    `,

    "godot_plugin": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; Editor Tooling &bull; Automation</strong>
</h3>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A custom utility plugin designed directly for the Godot engine editor to speed up workflow and automate repetitive tasks when building scenes.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Built using C++ (GDExtension/GDNative) to integrate deeply with the editor. I focused on making the UI clean and ensuring the plugin ran performantly without slowing down the core Godot engine experience.
</p>
    `,
"ecosystem_sim": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C# &bull; Unity &bull; AI</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Algorithms 2 class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    A 3D simulation that models a self-sustaining ecosystem featuring a dynamic food chain of producers, prey, and predators. To keep the environment organic without heavy scripting, I implemented realistic mechanics like viral outbreaks, active genetics with natural selection, and migration repopulation.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Developed in Unity using C#. I engineered the creatures using Finite State Machines (FSM) driven by survival needs like hunger, fear, and reproduction. The movement is handled through vector-based steering behaviors, implementing real-world biological concepts like the Selfish Herd Theory for deer and Optimal Foraging Theory for the hunting lions.
</p>
    `,

    "zombie_ai": `
<h3 style='margin-bottom:4px; font-size:1.4rem; color:#ffffff;'>
    <strong>C++ &bull; Unreal Engine &bull; AI</strong>
</h3>
<p style='margin:0 0 12px 0; font-size:0.9rem; color:#94a3b8;'>
    <em>Developed for the Algorithms 2 class.</em>
</p>

<hr style='border:0; border-top:1px solid rgba(255,255,255,0.1); margin:12px 0;'>

<h4 style='color:#06b6d4; margin-bottom:6px; font-size:1.1rem;'>What is it about?</h4>
<p style='margin-bottom:12px; line-height:1.5; color:#cbd5e1;'>
    An autonomous survival AI agent dropped into a hostile environment. It has to independently navigate towns, scavenge for weapons and supplies, manage its inventory, and dynamically decide whether to fight, flee, or hide from roaming zombie hordes to stay alive.
</p>

<h4 style='color:#8b5cf6; margin-bottom:6px; font-size:1.1rem;'>Under the Hood</h4>
<p style='margin-bottom:0; line-height:1.5; color:#cbd5e1;'>
    Built as a C++ plugin for a provided Unreal Engine framework. I built a complex Finite State Machine that handles decision-making with memory retention, so the AI remembers its previous tasks after being interrupted by a threat. I also implemented blended steering with tangential avoidance for smooth movement, and a spatial memory map so it remembers visited houses and dropped items.
</p>
    `
};