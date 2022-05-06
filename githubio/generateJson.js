const fs = require('fs');

const bosses = [];

fs.readdirSync('./bosses').forEach((file) => {
  bosses.push({
    name: file,
    image: `https://emmanuelsage.github.io/HBCUSPIXEL/bosses/${file}`,
  });
});

fs.readdirSync('./raw_sprites/spritesmith/quests/bosses/').forEach((file) => {
    // remove quest_TEMPLATE_FOR_MISSING_IMAGE
    bosses.push({
      name: file,
      image: `https://emmanuelsage.github.io/HBCUSPIXEL/raw_sprites/spritesmith/quests/bosses/${file}`,
    });
});

fs.writeFileSync('./githubio/data.json', JSON.stringify(bosses), null, 2);
