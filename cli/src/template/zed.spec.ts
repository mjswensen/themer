import test from 'ava';
import themer from '../index.js';

test('zed', async (t) => {
  const files = [];
  for await (const file of themer(['default'], ['zed'], {
    wallpaperSizes: [],
  })) {
    files.push(file);
  }
  t.is(files.length, 2, 'produces a theme file and a README');
  const theme = files.find(({ path }) => path.endsWith('.json'));
  t.truthy(theme, 'produces a JSON theme file');
  const parsed = JSON.parse(theme?.content || '');
  t.is(parsed.name, 'Themer Default', 'theme family has correct name');
  t.is(parsed.author, 'Themer', 'theme has correct author');
  t.truthy(
    Array.isArray(parsed.themes) && parsed.themes.length > 0,
    'contains theme variants',
  );
  for (const variant of parsed.themes) {
    t.truthy(variant.name, 'variant has a name');
    t.regex(
      variant.appearance,
      /^(dark|light)$/,
      'variant has valid appearance',
    );
    t.truthy(variant.style, 'variant has style');
    t.truthy(variant.style.syntax, 'variant has syntax highlighting');
    t.truthy(
      Array.isArray(variant.style.players) && variant.style.players.length > 0,
      'variant has player colors',
    );
  }
});
